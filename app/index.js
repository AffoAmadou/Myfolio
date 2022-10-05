//! Importo le diverse pagine sapendo che all'interno ci sono degli index quindi
//! Nessun bisogno di chiamare il file intero

import About from 'pages/About'
import Project from 'pages/Projects'
import each from 'lodash/each'

// import Collections from 'pages/Collections'
// import Detail from 'pages/Detail'
import Home from 'pages/Home'

//* IMPORTO GLI INDEX PRESENTI NELLE CARTELLE

class App {
    constructor() {
        this.createContent() //! Questo metodo mi permette di creare il content e cosi da recuperare il data-template 
        //! E percio sapere in che pagina mi trovo

        // this.createPreloader()
        // this.createNavigation()
        this.createPages()
        //     this.createCanvas()
        //     this.addEventListeners()
        this.addLinkListeners()

        //     this.update()
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
        console.log(this.page)
        this.page.create() //? Chiamo il create nella classe page che é legata ad ognuna delle pagine
        this.page.show()
        // this.page.hide()

    }


    onChange(url) {
        console.log(url)
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