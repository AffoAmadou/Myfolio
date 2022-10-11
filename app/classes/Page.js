//!Creo sta classe per avere un punto in commune in tutte le pagine cosi da avere la possibilità di chiamare i metodi 
//! una sola volta senza bisogno di chiamarli in tutte le pagine

import each from 'lodash/each'
import GSAP from 'gsap'
import Prefix from 'prefix'
import NormalizeWheel from 'normalize-wheel'

export default class Page {

    constructor({ id, element, elements }) {
        this.id = id
        this.selector = element //! .about ad esempio passato da una delle pagine  
        this.selectorChildren = {
            ...elements
        }

        this.transformPrefix = Prefix('transform')

        //*Gestione dello scroll
        this.scroll = {
            current: 0,
            target: 0,
            last: 0,
            limit: 0
        }


        this.onMouseWheelEvent = this.onMouseWheel.bind(this)//!SENZA QUESTO LA VARIABILE THIS.SCROLL É UNDEFINED
    }

    //? Metodo per creare una pagina ed ottenere tutti gli elementi utili per le animazioni etc
    create() {
        this.element = document.querySelector(this.selector)//* Ad esempio il . about mi ritorna la div.about con tutto il suo contenuto
        this.elements = {} //! Sono tutte le classi che passo dalla classe pagina  ad esempio
        //!i bottoni o altro in modo da poter fare le animazioni, entrate o uscite

        //*Gestione dello scroll
        this.scroll = {
            current: 0,
            target: 0,
            last: 0,
            limit: 0
        }

        each(this.selectorChildren, (entry, key) => {
            if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
                this.elements[key] = entry //* se é gia un query selector lo passo direttamente
            }
            else {
                this.elements[key] = this.element.querySelectorAll(entry) //! Se ce né piu di uno, ad esempio le immagini faccio un selector all per avere un array

                if (this.elements[key].lenght === 0) {
                    this.elements[key] = null //*Se é vuoto ritorno null
                }
                else if (this.elements[key].lenght === 1) {
                    this.elements[key] = document.querySelector(entry) //! se cé una sola di queste classi faccio un query selector cosi non mi fa un array

                }
            }
            // console.log(this.elements[key], entry)

        })

    }

    show() {
        return new Promise(resolve => {
            this.animationIn = GSAP.timeline()

            this.animationIn.fromTo(this.element, {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                onComplete: resolve
            })

            this.animationIn.call(_ => {
                this.addEventListeners()
            })
        })

    }

    hide() {
        return new Promise(resolve => {

            this.removeEventListeners()
            this.animationOut = GSAP.timeline()

            this.animationOut.to(this.element, {
                autoAlpha: 0,
                onComplete: resolve
            })
        })
    }


    //*Debug dello scroll per lo smoothscroll

    onMouseWheel(event) {
        const { pixelY } = NormalizeWheel(event) //* Per normalizzare la velocita in ogni browser
        this.scroll.target += pixelY
    }

    onResize() {
        if (this.elements.wrapper) {
            this.scroll.limit = this.elements.wrapper[0].clientHeight - window.innerHeight
        }
    }

    update() {
        this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)


        this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

        if (this.scroll.current < 0.01) {
            this.scroll.current = 0
        }

        if (this.elements.wrapper) {
            this.elements.wrapper[0].style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`
        }
    }
    addEventListeners() {
        window.addEventListener('mousewheel', this.onMouseWheelEvent)
    }

    removeEventListeners() {
        window.addEventListener('mouseWheel', this.onMouseWheelEvent)
    }

    //* Fine debug dello scroll

}




