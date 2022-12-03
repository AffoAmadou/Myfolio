import { Mesh, Program, Texture, Plane } from 'ogl'

import fragment from 'shaders/plane-fragment.glsl'
import vertex from 'shaders/plane-vertex.glsl'

import GSAP from 'gsap'

export default class {
    constructor({ gl, scene, sizes }) {
        this.element = document.querySelector('.project__image__media ')
        this.gl = gl
        this.scene = scene
        this.sizes = sizes

        this.geometry = new Plane(this.gl)

        this.createTexture()
        this.createProgram()
        this.createMesh()

        this.extra = {
            x: 0,
            y: 0
        }
    }
    createTexture() {
        const image = this.element.getAttribute('data-src')
        this.texture = window.TEXTURES[image]
    }

    createProgram() {

        this.program = new Program(this.gl, {
            fragment,
            vertex,
            uniforms: {
                uAlpha: { value: 1 },
                uSpeed: { value: 0 },
                uViewportSizes: { value: [this.sizes.width, this.sizes.height] },
                tMap: { value: this.texture }
            }
        })

    }

    createMesh() {
        this.mesh = new Mesh(this.gl, {
            geometry: this.geometry,
            program: this.program
        })

        this.mesh.setParent(this.scene)

        this.mesh.scale.x = 2
    }

    createBounds({ sizes }) {
        this.sizes = sizes

        this.bounds = this.element.getBoundingClientRect()

        this.updateScale()
        this.updateX()
        this.updateY()
    }

    /**
     * 
     * Animations
     */


    show() {

    }

    hide() {

    }
    /**
      * Events
      */
    onResize(sizes, scroll) {
        this.extra = {
            x: 0,
            y: 0
        }
        this.createBounds(sizes)
        this.updateX(scroll && scroll.x)
        this.updateY(scroll && scroll.y)
    }

    /**
     * LOOP
     */
    updateScale() {
        this.width = this.bounds.width / window.innerWidth
        this.height = this.bounds.height / window.innerHeight

        this.mesh.scale.x = this.sizes.width * this.width
        this.mesh.scale.y = this.sizes.height * this.height
    }

    updateX() {
        this.x = (this.bounds.left) / window.innerWidth
        this.mesh.position.x = (-this.sizes.width / 2) + (this.mesh.scale.x / 2) + (this.x * this.sizes.width) + this.extra.x
    }

    updateY(y = 0) {
        this.y = (this.bounds.top + y) / window.innerHeight
        this.mesh.position.y = (this.sizes.height / 2) - (this.mesh.scale.y / 2) - (this.y * this.sizes.height) + this.extra.y
    }

    update(scroll, speed, index) {
        if (!this.bounds) return
        this.updateX()
        this.updateY(scroll)
    }
}