import { map } from "lodash"
import { Plane, Transform } from "ogl"
import Media from "./Media"

import GSAP from 'gsap'

export default class {
    constructor({ gl, scene, sizes }) {
        this.gl = gl
        this.sizes = sizes
        this.scene = scene

        this.group = new Transform()

        this.galleryElement = document.querySelector('.home__gallery__wrapper')
        this.mediasElements = document.querySelectorAll('.home__gallery__media')

        this.scroll = {
            current: 0,
            target: 0,
            start: 0,
            lerp: 0.1,
            last: 0,
            velocity: 1
        }

        this.createGeometry()
        this.createGallery()

        this.group.setParent(this.scene)

        this.show()
    }

    createGeometry() {
        this.geometry = new Plane(this.gl)
    }
    createGallery() {
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

    show() {
        map(this.medias, media => media.show())
    }

    hide() {
        map(this.medias, media => media.hide())
    }


    /**
     * Events
     */
    onResize(event) {
        this.sizes = event.sizes
        this.bounds = this.galleryElement.getBoundingClientRect()

        this.scroll.last = this.scroll.target = 0

        
        map(this.medias, media => media.onResize(event, this.scroll))
        // this.scroll.limit = this.bounds.width - this.medias[0].element.clientWidth
    }

    onTouchDown({ x, y }) {
        this.scroll.last = this.scroll.current
    }
    onTouchMove({ x, y }) {
        const distance = x.start - x.end

        this.scroll.target = this.scroll.last - distance
    }
    onTouchUp({ x, y }) { }

    onWheel({ pixelY }) {
        this.scroll.target += pixelY

    }

    /**
     * UPDATE
     */

    update() {
        if (!this.bounds) return

        // this.scroll.target = GSAP.utils.clamp(-this.scroll.limit, 0, this.scroll.target)
        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp)

        if (this.scroll.last < this.scroll.current) {
            this.scroll.direction = 'right'
        } else if (this.scroll.last > this.scroll.current) {
            this.scroll.direction = 'left'
        }

        this.scroll.last = this.scroll.current

        map(this.medias, (media, index) => {
            const scaleX = media.mesh.scale.x / 2

            if (this.scroll.direction === 'left') {
                const x = media.mesh.position.x + scaleX

                if (x < -this.sizes.width / 2) {
                    media.extra.x += this.sizes.width
                }
            }
            else if (this.scroll.direction === 'right') {
                const x = media.mesh.position.x - scaleX

                if (x > this.sizes.width / 2) {
                    media.extra.x -= this.sizes.width
                }
            }
            media.update(this.scroll.current)
        })
    }

    /**
     * Dedstroy
     */

    destroy() {
        this.scene.removeChild(this.group)
    }
}