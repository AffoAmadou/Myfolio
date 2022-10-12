import Page from "classes/Page";
import Button from "classes/Button";


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


    destroy() {
        super.destroy()

        this.link.removeEventListeners()
    }

}