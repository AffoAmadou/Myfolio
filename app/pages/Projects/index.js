import Page from "classes/Page";
import Button from "classes/Button";
import GSAP from 'gsap'

export default class Project extends Page {

    constructor() {
        super({
            id: 'project',
            element: '.project',
            elements: {
                navigation: document.querySelector('.navigation'),
                wrapper: '.project__wrapper',
                link: '.project__process__link'
            }
        })


    }

    create() {
        super.create()

        this.link = new Button({
            element: this.elements.link[0]
        })
    }

    show() {
        const timeline = GSAP.timeline({
             delay: 1.34
        })

        timeline.fromTo(this.element, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
        })

        super.show(timeline)
    }
    destroy() {
        super.destroy()

        this.link.removeEventListeners()
    }

}