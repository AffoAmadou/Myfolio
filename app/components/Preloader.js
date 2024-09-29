import Component from 'classes/Component'
import GSAP from 'gsap'
import { Texture } from 'ogl'
import { split } from 'utils/text'

export default class Preloader extends Component {
  constructor ({ canvas }) {
    super({
      element: '.preloader',
      elements: {
        title: '.preloader__text',
        upnumber: '.preloader__number__text',
        downumber: '.preloader__reverse__text',
        overlay: '.preloader__overlay',
        container: '.preloader__background'
      }
    })

    this.canvas = canvas
    window.TEXTURES = {}

    split({
      element: this.elements.title[0],
      expression: '<br>'
    })

    split({
      element: this.elements.title[0],
      expression: '<br>'
    })

    this.elements.titleSpans = this.elements.title[0].querySelectorAll('span span')

    this.length = 0

    this.createLoader()
  }

  createLoader () {
    console.log(window.ASSETS)
    window.ASSETS.forEach((image) => {
      const texture = new Texture(this.canvas.gl, {
        generateMipmaps: false
      })

      const media = new window.Image()

      media.crossOrigin = 'anonymous'
      media.src = image

      media.onload = _ => {
        texture.image = media

        this.onAssetLoaded()
      }

      window.TEXTURES[image] = texture
    })
  }

  onAssetLoaded (image) {
    this.length += 1

    const percent = this.length / window.ASSETS.length

    this.elements.upnumber[0].innerHTML = `${Math.round(percent * 100)}`
    this.elements.downumber[0].innerHTML = `${100 - Math.round(percent * 100)}`

    if (percent === 1) {
      this.onLoaded()
    }
  }

  onLoaded () {
    return new Promise(resolve => {
      //* Dopo aver fatto l'animazione di uscita faccio l'emit in APP js cosiche il preloader
      //* corrente chiami il destroy cosi da essere rimosso lui

      this.emit('complete')

      this.animateOut = GSAP.timeline({
        delay: 1,
        defaults: {
          duration: 1.5,
          ease: 'power3.inOut'
        }
      })

      this.animateOut.to([this.elements.upnumber, this.elements.downumber], {

        autoAlpha: 0,
        y: '-100%'
      }, 'myLabel')

      this.animateOut.to(this.elements.titleSpans, {
        delay: 0.5,
        autoAlpha: 0,
        y: '-100%'
      }, 'myLabel')

      this.animateOut.to(this.elements.container, {
        delay: 0.5,
        scaleY: 0
      }, 'myLabel')

      this.animateOut.to(this.elements.overlay, {
        scaleY: 0
      })

      this.animateOut.to(this.element, {
        scaleY: 0,
        transformOrigin: '100% 100%'
      })

      this.animateOut.call(_ => {
        this.destroy()
      })
    })
  }

  destroy () {
    this.element.parentNode.removeChild(this.element)
  }
}
