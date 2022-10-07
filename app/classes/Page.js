//!Creo sta classe per avere un punto in commune in tutte le pagine cosi da avere la possibilità di chiamare i metodi 
//! una sola volta senza bisogno di chiamarli in tutte le pagine

import each from 'lodash/each'
import GSAP from 'gsap'

export default class Page {

    constructor({ id, element, elements }) {
        this.id = id
        this.selector = element //! .about ad esempio passato da una delle pagine  
        this.selectorChildren = {
            ...elements
        }
    }

    //? Metodo per creare una pagina ed ottenere tutti gli elementi utili per le animazioni etc
    create() {
        this.element = document.querySelector(this.selector)//* Ad esempio il . about mi ritorna la div.about con tutto il suo contenuto
        this.elements = {} //! Sono tutte le classi che passo dalla classe pagina  ad esempio
        //!i bottoni o altro in modo da poter fare le animazioni, entrate o uscite

        each(this.selectorChildren, (entry, key) => {
            if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
                this.elements[key] = entry //* se é gia un query selector lo passo direttamente
            }
            else {
                this.elements[key] = document.querySelectorAll(entry) //! Se ce né piu di uno, ad esempio le immagini faccio un selector all per avere un array

                if (this.elements[key].lenght === 0) {
                    this.elements[key] = null //*Se é vuoto ritorno null
                }
                else if (this.elements[key].lenght === 1) {
                    this.elements[key] = querySelector(entry) //! se cé una sola di queste classi faccio un query selector cosi non mi fa un array

                }
            }
            // console.log(this.elements[key], entry)

        })

    }

    show() {
        return new Promise(resolve => {
            GSAP.fromTo(this.element, {
                autoAlpha: 0
            },
                {
                    autoAlpha: 1,
                    onComplete: resolve
                })
        })

    }

    hide() {
        return new Promise(resolve => {
            GSAP.to(this.element, {
                autoAlpha: 0,
                onComplete: resolve
            })
        })
    }

}




