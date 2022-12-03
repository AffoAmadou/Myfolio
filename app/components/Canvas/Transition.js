import { Mesh, Program, Texture, Plane } from 'ogl'

import fragment from 'shaders/home-fragment.glsl'
import vertex from 'shaders/home-vertex.glsl'

import GSAP from 'gsap'

export default class Media {
    constructor({ home, gl, scene, sizes, url }) {
        this.home = home
        this.gl = gl
        this.scene = scene
        this.sizes = sizes
        this.url = url

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
        console.log(this.home)
        // const image = this.element.querySelector('.home__gallery__media__image')
        // this.texture = window.TEXTURES[image.getAttribute('data-src')]
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

   

    /**
     * 
     * Animations
     */


    transition() {

    }
   

 
}