import { map } from 'lodash'
import { Plane, Transform } from 'ogl'
import Gallery from './Gallery'
import Picture from './Picture'
import GSAP from 'gsap'

export default class {
  constructor ({ gl, scene, sizes, transition }) {
    this.id = 'project'
    this.scene = scene

    this.gl = gl
    this.sizes = sizes

    this.group = new Transform()
    this.transition = transition
    this.createGeometry()
    this.createGalleries()
    this.Picture = new Picture({ gl: this.gl, scene: this.scene, sizes: this.sizes, transition: this.transition })

    this.onResize({
      sizes: this.sizes
    })

    this.show()
  }

  createGeometry () {
    this.geometry = new Plane(this.gl)
  }

  createGalleries () {
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

  show () {
    this.group.setParent(this.scene)

    map(this.galleries, gallery => gallery.show())
  }

  hide () {
    this.group.setParent(null)

    map(this.galleries, gallery => gallery.hide())
  }

  /**
     * Events
     */
  onResize (event) {
    map(this.galleries, gallery => gallery.onResize(event))
  }

  onTouchDown (event) {
    map(this.galleries, gallery => gallery.onTouchDown(event))
  }

  onTouchMove (event) {
    map(this.galleries, gallery => gallery.onTouchMove(event))
  }

  onTouchUp (event) {
    map(this.galleries, gallery => gallery.onTouchUp(event))
  }

  onWheel ({ pixelX, pixelY }) {

  }

  /**
     * UPDATE
     */

  update (scroll) {
    map(this.galleries, gallery => gallery.update(scroll))
    this.Picture.update(scroll)
  }

  destroy () {
    map(this.galleries, gallery => gallery.destroy())
    this.Picture.destroy()
  }
}
