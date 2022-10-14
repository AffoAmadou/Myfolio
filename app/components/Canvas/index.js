import { Camera, Renderer, Transform } from 'ogl'
import Home from './Home'


export default class Canvas {
    constructor() {
        this.createRenderer()
        this.createCamera()
        this.createScene()
        this.createHome()
    }

    createRenderer() {
        this.renderer = new Renderer({
            alpha: true,
            antialias: true,
        });

        this.gl = this.renderer.gl

        document.body.appendChild(this.gl.canvas)
    }

    createCamera() {
        this.camera = new Camera(this.gl)
        this.camera.position.z = 5
    }

    createScene() {
        this.scene = new Transform()
    }

    createHome() {
        this.home = new Home({
            gl: this.gl,
            scene: this.scene
        })

    }

    onResize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.camera.perspective({
            aspect: window.innerWidth / window.innerHeight
        })


        const fov = this.camera.fov * (Math.PI / 180);
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
        const width = height * this.camera.aspect;


        this.sizes = {
            height,
            width
        }

        this.home.onResize(){
            
        }
    }

    update() {
        this.renderer.render({
            camera: this.camera,
            scene: this.scene,
        })
    }
}