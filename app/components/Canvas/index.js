import { Camera, Renderer, Transform } from 'ogl'
import Home from './Home'
import Project from './Project'
import Transition from './Transition'

import GSAP from 'gsap'

export default class Canvas {
    constructor({ template }) {

        this.template = template

        this.x = {
            start: 0,
            distance: 0,
            end: 0
        }
        this.y = {
            start: 0,
            distance: 0,
            end: 0
        }

        this.createRenderer()
        this.createCamera()
        this.createScene()

        this.onResize()

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

    /**
    **Home
    */
    createHome() {
        this.home = new Home({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes,
            transition: this.transition
        })
    }

    destroyHome() {
        if (!this.home) return
        this.home.destroy()
        this.home = null
    }

    /**
    **Project
    */
    createProject() {
        this.project = new Project({
            gl: this.gl,
            scene: this.scene,
            sizes: this.sizes,
            transition: this.transition
        })
    }
    destroyProject() {
        if (!this.project) return
        this.project.destroy()
        this.project = null
    }
    /**
     **Events
     */
    onPreloaded() {
        this.onChangeEnd(this.template)
    }
    onChangeStart(template, url) {
        if (this.home) {
            this.home.hide()
        }

        if (this.project) {
            this.project.Picture.hide()
            this.project.hide()
        }

        this.isFromHomeToProject = this.template === 'home' && url.indexOf('project') > -1
        this.isFromProjectToHome = this.template === 'project' && url.indexOf('home') > -1


        if (this.isFromHomeToProject || this.isFromProjectToHome) {
            this.transition = new Transition({
                gl: this.gl,
                scene: this.scene,
                sizes: this.sizes,
                url
            })

            this.transition.setElement(this.project || this.home)
        }

    }
    onChangeEnd(template) {

        if (template === 'home') {
            this.createHome()
        } else {
            this.destroyHome()
        }

        if (template === 'project') {
            this.createProject()
        }
        else {
            this.destroyProject()
        }

        this.template = template
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
        const values = {
            sizes: this.sizes
        }

        if (this.project) {
            this.project.onResize(values)
        }

        if (this.home) {
            this.home.onResize(values)
        }
    }
    onTouchDown(event) {
        this.isDown = true
        this.x.start = event.touches ? event.touches[0].clientX : event.clientX
        this.y.start = event.touches ? event.touches[0].clientY : event.clientY

        const values = {
            x: this.x,
            y: this.y
        }

        if (this.project) {
            this.project.onTouchDown(values)
        }

        if (this.home) {
            this.home.onTouchDown(values)
        }
    }
    onTouchMove(event) {
        if (!this.isDown) return

        const x = event.touches ? event.touches[0].clientX : event.clientX
        const y = event.touches ? event.touches[0].clientY : event.clientY

        this.x.end = x
        this.y.end = y

        const values = {
            x: this.x,
            y: this.y
        }

        if (this.project) {
            this.project.onTouchMove(values)
        }

        if (this.home) {
            this.home.onTouchMove(values)

        }
    }
    onTouchUp(event) {
        this.isDown = false

        const x = event.changedTouches ? event.changedTouches[0].clientX : event.clientX
        const y = event.changedTouches ? event.changedTouches[0].clientY : event.clientY

        this.x.end = x
        this.y.end = y

        const values = {
            x: this.x,
            y: this.y
        }

        if (this.project) {
            this.project.onTouchUp(values)
        }

        if (this.home) {
            this.home.onTouchUp(values)
        }

    }
    onWheel(event) {
        if (this.home) {
            this.home.onWheel(event)
        }
    }
    /**
     * //* LOOP
     */
    update(scroll) {

        if (this.project) {
            this.project.update(scroll)
        }

        if (this.home) {
            this.home.update()
        }

        this.renderer.render({
            camera: this.camera,
            scene: this.scene,
        })
    }
}