//! Importo le diverse pagine sapendo che all'interno ci sono degli index quindi
//! Nessun bisogno di chiamare il file intero

import About from 'pages/About'
import Project from 'pages/Projects'
import each from 'lodash/each'
import Home from 'pages/Home'
import Preloader from 'components/Preloader'
import Detection from 'classes/Detection'

import NormalizeWheel from 'normalize-wheel'


import Canvas from 'components/Canvas'
//* IMPORTO GLI INDEX PRESENTI NELLE CARTELLE

class App {
    constructor() {
        this.createContent() //! Questo metodo mi permette di creare il content e cosi da recuperare il data-template 
        //! E percio sapere in che pagina mi trovo

        this.createCanvas()
        this.createPreloader()
        this.createPages()
        this.addEventListeners()
        this.addLinkListeners()

        //  this.onResize()

        this.update()
    }

    /**
     * //*Events
     */
    createPreloader() {
        this.preloader = new Preloader({
            canvas:this.canvas
        })

        //*Event Emitter quando il preloader ha caricato le immagini chiamo il metodo che sta qui sotto
        this.preloader.once('complete', this.onPreloaded.bind(this))
    }

    createCanvas() {
        this.canvas = new Canvas({
            template: this.template
        })
    }

    createContent() {
        //?Qui eseguo il create content per sapere in quale pagina mi trovo attualmente
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template')
    }

    //? I questo modo creo l'oggetto PAGINA
    createPages() {
        this.pages = {
            about: new About(),
            home: new Home(),
            project: new Project(), //!Il nome colorato deve essere uguale a nome dato nel template 
        }

        this.page = this.pages[this.template] //?INSERISCO LA PAGINA IN CUI SONO ATTUALMENTE
        this.page.create() //? Chiamo il create nella classe page che é legata ad ognuna delle pagine
    }

    onPreloaded() {
        this.canvas.onPreloaded()
        this.onResize()
        this.page.show()
    }

    onPopState() {
        this.onChange({
            url: window.location.pathname,
            push: false
        })
    }

    async onChange({ url, push = true }) {
        this.canvas.onChangeStart(this.template, url)
        await this.page.hide()


        const request = await window.fetch(url)

        if (request.status === 200) { //!200 = Page loaded
            const html = await request.text() //!get next page content

            const div = document.createElement('div') //!Create a div to store the content
            //!cosi da non mettere anche i doctype etc 

            if (push) {
                window.history.pushState({}, '', url)
            }

            div.innerHTML = html

            const divContent = div.querySelector('.content')//! get the only selector that change in every page

            this.template = divContent.getAttribute('data-template')


            this.content.setAttribute('data-template', this.template);//*Change the data template to know in which page i am (home, about, portfolio)
            this.content.innerHTML = divContent.innerHTML //! Insert it in the content

            this.canvas.onChangeEnd(this.template)

            this.page = this.pages[this.template] //! reinsert the content in the page

            this.page.create() //? Call the create method in the page class

            this.onResize()

            this.page.show()

            this.addLinkListeners()
        }
        else {
            console.log("error")
        }

    }

    onResize() {
        if (this.canvas && this.canvas.onResize) {
            this.canvas.onResize()
        }
        window.requestAnimationFrame(_ => {
            if (this.page && this.page.onResize) {
                this.page.onResize()
            }
        })
    }

    onTouchDown(event) {
        if (this.canvas && this.canvas.onTouchDown) {
            this.canvas.onTouchDown(event)
        }

        if (this.page && this.page.onTouchDown) {
            this.page.onTouchDown(event);

          }
    }
    onTouchMove(event) {
        if (this.canvas && this.canvas.onTouchMove) {
            this.canvas.onTouchMove(event)
        }

        if (this.page && this.page.onTouchDown) {
            this.page.onTouchMove(event);
          }
    }
    onTouchUp(event) {
        if (this.canvas && this.canvas.onTouchUp) {
            this.canvas.onTouchUp(event)
        }

        if (this.page && this.page.onTouchDown) {
            this.page.onTouchUp(event);
          }
    }

    onWheel(event) {
        const normalizedWheel = NormalizeWheel(event) //* Per normalizzare la velocita in ogni browser

        if (this.canvas && this.canvas.onWheel) {
            this.canvas.onWheel(normalizedWheel)
        }

        if (this.page && this.page.onWheel) {
            this.page.onWheel(normalizedWheel)
        }

    }

    /**
     * //*LOOP
     */

    update() {

        if (this.page && this.page.update) {
            this.page.update()
        }

        if (this.canvas && this.canvas.update) {
            this.canvas.update(this.page.scroll)
        }

        this.frame = window.requestAnimationFrame(this.update.bind(this))
    }

    /**
     * //*LISTENERS
     */
    addEventListeners() {

        window.addEventListener('mousewheel', this.onWheel.bind(this))

        window.addEventListener('popstate', this.onPopState.bind(this))

        window.addEventListener('mousedown', this.onTouchDown.bind(this))
        window.addEventListener('mousemove', this.onTouchMove.bind(this))
        window.addEventListener('mouseup', this.onTouchUp.bind(this))

        window.addEventListener('touchstart', this.onTouchDown.bind(this))
        window.addEventListener('touchmove', this.onTouchMove.bind(this))
        window.addEventListener('touchend', this.onTouchUp.bind(this))

        window.addEventListener('resize', this.onResize.bind(this))
    }

    addLinkListeners() {
        const links = document.querySelectorAll('a:not(.project__process__link)')
 //! Recupero tutti i link della pagina 

        each(links, link => {
            link.onclick = event => {
                const { href } = link
                event.preventDefault() //!all click non eseguo il cambio di pagina come dovrebbe esserer

                this.onChange({ url: href })//*Funzione che si trova sopra Per gestire il cambio di pagina
            }
        })
    }
}

new App()