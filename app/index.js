//! Importo le diverse pagine sapendo che all'interno ci sono degli index quindi
//! Nessun bisogno di chiamare il file intero

import About from 'pages/About'
import Projects from 'pages/Projects'
// import Collections from 'pages/Collections'
// import Detail from 'pages/Detail'
import Home from 'pages/Home'



import each from 'lodash/each'

//* IMPORTO GLI INDEX PRESENTI NELLE CARTELLE

class App {
    constructor() {
        // this.createContent()

        // this.createPreloader()
        // this.createNavigation()
        this.createPages()
        //     this.createCanvas()
        //     this.addEventListeners()
        //     this.addLinkListeners()

        //     this.update()
    }


    createPages() {
        this.pages = {
            about: new About(),
            home: new Home(),
            projects: new Projects(),
            // detail: new Detail(),
        }
        console.log(this.pages);

        this.page = this.pages[this.template] //!INSERISCO LA PAGINA IN CUI SONO ATTUALMENTE
        // this.page.create()

    }
}

new App()