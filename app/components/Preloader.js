import Component from "classes/Component"
import each from 'lodash/each'
import GSAP from 'gsap'

import { split } from 'utils/text'

export default class Preloader extends Component {

    constructor() {
        super({
            element: '.preloader',
            elements: {
                title: '.preloader__text',
                upnumber: '.preloader__number__text',
                downumber: '.preloader__reverse__text',
                images: document.querySelectorAll('img')
            }
        })
        console.log(this.elements.images)

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

        // setTimeout(_ => {
        //     this.emit('complete')
        // }, 1000)
    }

    createLoader() {
        each(this.elements.images, element => {
            element.onload = _ => this.onAssetLoaded(element)
            element.src = element.getAttribute('data-src')
        })
    }

    onAssetLoaded(image) {
        this.length += 1

        const percent = this.length / this.elements.images.length

        this.elements.upnumber[0].innerHTML = `${Math.round(percent * 100)}`
        this.elements.downumber[0].innerHTML = `${100 - Math.round(percent * 100)}`

        if (percent === 1) {
            this.onLoaded()
        }
    }

    onLoaded() {

        return new Promise(resolve => {
            this.animateOut = GSAP.timeline({
                delay: 2
            })

            this.animateOut.to([this.elements.upnumber, this.elements.downumber], {
                autoAlpha: 0,
                ease: 'expo.out',
                duration: 1.2,
                y: "100%"
            })

            this.animateOut.to(this.elements.titleSpans, {
                autoAlpha: 0,
                delay: .1,
                ease: 'expo.out',
                duration: 1.5,
                y: "100%"
            })

            this.animateOut.to(this.element, {
                scaleY: 0,
                transformOrigin: '100% 100%'
            })
            //*Dopo aver fatto l'animazione di uscita faccio l'emit in APP js cosiche il preloader
            //* corrente chiami il destroy cosi da essere rimosso lui
            this.animateOut.call(_ => {
                this.emit('complete')
            })
        })
    }

    destroy() {
        this.element.parentNode.removeChild(this.element)
    }
}