import { map } from 'lodash'
import { Plane, Transform } from 'ogl'
import Media from './Media'
import Prefix from 'prefix'

import GSAP from 'gsap'

export default class {
  constructor ({ gl, scene, sizes, transition }) {
    this.id = 'home'
    this.gl = gl
    this.sizes = sizes
    this.scene = scene
    this.transition = transition
    this.group = new Transform()

    this.galleryElement = document.querySelector('.home__gallery')

    this.galleryElementWrapper = document.querySelector('.home__gallery__wrapper')

    this.mediasElements = document.querySelectorAll('.home__gallery__media')

    this.projectsElementsActive = 'home__article--active'
    this.projectsElements = document.querySelectorAll('.home__article')

    this.projectsTitle = document.querySelectorAll('.home__title__article')
    this.projectsTitleActive = 'home__title__article--active'

    this.transformPrefix = Prefix('transform')

    this.scroll = {
      current: 0,
      target: 0,
      start: 0,
      lerp: 0.1,
      last: 0,
      velocity: 1
    }

    this.speed = {
      target: 0,
      current: 0,
      lerp: 0.1
    }
    this.createGeometry()
    this.createGallery()

    this.onResize({
      sizes: this.sizes
    })
    this.group.setParent(this.scene)

    this.show()
  }

  createGeometry () {
    this.geometry = new Plane(this.gl, {
      widthSegments: 20,
      heightSegments: 20
    })
  }

  createGallery () {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes
      })
    })
  }

  /**
   * Animations
   */
  async show () {
    if (this.transition) {
      // this.media.opacity.multiplier = 0

      const { src } = this.transition.mesh.program.uniforms.tMap.value.image
      const texture = window.TEXTURES[src]
      const media = this.medias.find(media => media.texture === texture)

      const scroll = -media.bounds.left - media.bounds.width / 2 + window.innerWidth / 2

      this.update()

      this.transition.animate(
        {
          scale: media.mesh.scale,
          position: { x: 0, y: 0, z: 0 }
        }, _ => {
          media.opacity.multiplier = 1

          map(this.medias, item => {
            if (media !== item) {
              item.show()
            }
          })

          this.scroll.current = this.scroll.target = this.scroll.last = this.scroll.start = scroll
        })
    } else {
      map(this.medias, media => media.show())

      // GSAP.fromTo(this.galleryElement, {
      //   transform: 'translateX(-100%)'

      // }, {
      //   duration: 1,
      //   delay: 0.5,
      //   transform: 'translateX(-0%)',
      //   ease: 'expo.inOut'

      // })
    }
  }

  hide () {
    map(this.medias, media => media.hide())
  }

  /**
     * Events
     */
  onResize (event) {
    this.sizes = event.sizes
    this.bounds = this.galleryElementWrapper.getBoundingClientRect()

    this.scroll.last = this.scroll.target = 0

    map(this.medias, media => media.onResize(event, this.scroll))
    this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
  }

  onTouchDown ({ x, y }) {
    this.speed.target = 1
    this.scroll.last = this.scroll.current
  }

  onTouchMove ({ x, y }) {
    const distance = (x.start - x.end) * 0.5

    this.scroll.target = (this.scroll.last - distance)
  }

  onTouchUp ({ x, y }) {
    this.speed.target = 0
  }

  onWheel ({ pixelY }) {
    this.scroll.target += pixelY
  }

  /**
     * *Changing
     */

  onChange (index) {
    this.index = index

    if (this.index === this.mediasElements.length) {
      this.index = this.index - 1
    }
    const selectedProject = parseInt(this.mediasElements[this.index].getAttribute('data-index'))

    map(this.projectsElements, (element, elementIndex) => {
      if (elementIndex === selectedProject) {
        element.classList.add(this.projectsElementsActive)
      } else {
        element.classList.remove(this.projectsElementsActive)
      }
    })

    map(this.projectsTitle, (element, elementIndex) => {
      if (elementIndex === selectedProject) {
        element.classList.add(this.projectsTitleActive)
      } else {
        element.classList.remove(this.projectsTitleActive)
      }
    })
  }
  /**
     * UPDATE
     */

  update () {
    this.speed.current = GSAP.utils.interpolate(this.speed.current, this.speed.target, this.speed.lerp)

    this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

    this.galleryElement.style[this.transformPrefix] = `translateX(${this.scroll.current}px)`

    this.scroll.last = this.scroll.current

    const index = Math.floor(Math.abs((this.scroll.current - this.medias[0].bounds.width / 2) / this.scroll.limit) * (this.medias.length - 1))

    if (this.index !== index) {
      this.onChange(index)
    }

    map(this.medias, (media, index) => {
      media.update(this.scroll.current, this.speed.current, this.index)

      media.mesh.position.y += Math.cos((media.mesh.position.x / this.sizes.width) * Math.PI * 0.1) * 40 - 40
    })
  }
  /**
     * Dedstroy
     */

  destroy () {
    this.scene.removeChild(this.group)
  }
}
