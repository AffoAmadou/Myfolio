//! Importo le diverse pagine sapendo che all'interno ci sono degli index quindi
//! Nessun bisogno di chiamare il file intero

import About from 'pages/About'
import Project from 'pages/Projects'
import each from 'lodash/each'

// import Collections from 'pages/Collections'
// import Detail from 'pages/Detail'
import Home from 'pages/Home'
import Preloader from 'components/Preloader'

//* IMPORTO GLI INDEX PRESENTI NELLE CARTELLE

class App {
    constructor() {
        this.createContent() //! Questo metodo mi permette di creare il content e cosi da recuperare il data-template 
        //! E percio sapere in che pagina mi trovo

        this.createPreloader()
        // this.createNavigation()
        this.createPages()
        //     this.createCanvas()
        this.addEventListeners()
        this.addLinkListeners()

        this.update()
    }

    createPreloader() {
        this.preloader = new Preloader()

        //*Event Emitter quando il preloader ha caricato le immagini chiamo il metodo che sta qui sotto
        this.preloader.once('complete', this.onPreloaded.bind(this))
    }

    createContent() {
        //?Qui eseguo il create content per sapere in quale pagina mi trovo attualmente
        this.content = document.querySelector('.content')
        this.template = this.content.getAttribute('data-template')
        // console.log(this.template)
    }

    //? I questo modo creo l'oggetto PAGINA
    createPages() {
        this.pages = {
            about: new About(),
            home: new Home(),
            project: new Project(), //!Il nome colorato deve essere uguale a nome dato nel template 
            // detail: new Detail(),
        }

        this.page = this.pages[this.template] //?INSERISCO LA PAGINA IN CUI SONO ATTUALMENTE
        // console.log(this.page)
        this.page.create() //? Chiamo il create nella classe page che é legata ad ognuna delle pagine

        // this.page.hide()

    }

    onPreloaded() {
        this.preloader.destroy()
        this.onResize()
        this.page.show()
    }

    async onChange(url) {
        // console.log(url)
        await this.page.hide()

        const request = await window.fetch(url)

        if (request.status === 200) { //!200 = pagina ben caricata
            const html = await request.text() //!recupero il contenuto della pagina

            const div = document.createElement('div') //!Creo una div per metterci la parte del "html" che voglio
            //!cosi da non mettere anche i doctype etc 

            div.innerHTML = html

            const divContent = div.querySelector('.content')//! Recupero solo il .content che contiene la parte di divs che cambia in ogni pagina

            this.template = divContent.getAttribute('data-template')
            this.content.setAttribute('data-template', this.template);//*Cambio il data-template per far sapere che sono in questa pagina attualmente

            this.content.innerHTML = divContent.innerHTML //! E lo inserisco nel content della pagina in cui sono ora

            this.page = this.pages[this.template] //!Riassegno la pagina


            this.page.create() //? Chiamo il create nella classe page che é legata ad ognuna delle pagine

            this.onResize()

            this.page.show()

            this.addLinkListeners()
        }
        else {
            console.log("error")
        }

    }

    onResize() {
        if (this.page && this.page.onResize) {
            this.page.onResize()
        }
    }

    update() {
        if (this.page && this.page.update) {
            this.page.update()

        }

        this.frame = window.requestAnimationFrame(this.update.bind(this))
    }

    addEventListeners() {
        window.addEventListener('resize', this.onResize.bind(this))
    }

    addLinkListeners() {
        const links = document.querySelectorAll('a') //! Recupero tutti i link della pagina 

        each(links, link => {
            link.onclick = event => {
                const { href } = link
                event.preventDefault() //!all click non eseguo il cambio di pagina come dovrebbe esserer

                this.onChange(href)//*Funzione che si trova sopra Per gestire il cambio di pagina
                // console.log(event, href)
            }
        })
    }
}

new App()