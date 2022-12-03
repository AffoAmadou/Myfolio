import { map } from "lodash"
import { Plane, Transform } from "ogl"
import Gallery from "./Gallery"
import GSAP from 'gsap'
import Picture from "./Picture"
export default class {
    constructor({ gl, scene, sizes }) {
        this.gl = gl
        this.sizes = sizes

        this.group = new Transform()

        this.createGeometry()
        this.createGalleries()
        this.scene = scene
        this.group.setParent(scene)

        this.show()
    }

    createGeometry() {
        this.geometry = new Plane(this.gl)
    }

    createGalleries() {
        this.Picture = new Picture({ gl: this.gl, scene: this.scene, sizes: this.sizes })
        this.galleriesElements = document.querySelectorAll('.project__mobile')

        this.galleries = map(this.galleriesElements, (element, index) => {
            return new Gallery({
                element,
                geometry: this.geometry,
                index,
                gl: this.gl,
                scene: this.group,
                sizes: this.sizes
            })
        })
    }

    show() {
        map(this.galleries, gallery => gallery.show())
    }

    hide() {
        map(this.galleries, gallery => gallery.hide())
    }


    /**
     * Events
     */
    onResize(event) {
        map(this.galleries, gallery => gallery.onResize(event))
    }

    onTouchDown(event) {
        map(this.galleries, gallery => gallery.onTouchDown(event))
    }
    onTouchMove(event) {
        map(this.galleries, gallery => gallery.onTouchMove(event))
    }
    onTouchUp(event) {
        map(this.galleries, gallery => gallery.onTouchUp(event))
    }

    onWheel({ pixelX, pixelY }) {
    }

    /**
     * UPDATE
     */

    update(scroll) {
        map(this.galleries, gallery => gallery.update(scroll))
    }

    destroy() {
        map(this.galleries, gallery => gallery.destroy())
    }
}