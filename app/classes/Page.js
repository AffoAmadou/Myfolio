//! Creo sta classe per avere un punto in commune in tutte le pagine cosi da avere la possibilità di chiamare i metodi
//! una sola volta senza bisogno di chiamarli in tutte le pagine

import each from 'lodash/each'
import map from 'lodash/map'

import GSAP from 'gsap'
import Prefix from 'prefix'

import Title from 'animations/Title'
import Paragraph from 'animations/Paragraph'
import Label from 'animations/Label'
import Section from 'animations/Section'
import Parallax from 'animations/Parallax'
import Link from '../animations/Link'
import DetectionManager from './Detection'

import AsyncLoad from './AsyncLoad'
export default class Page {
  constructor ({ id, element, elements }) {
    this.id = id
    this.selector = element //! .about ad esempio passato da una delle pagine
    this.selectorChildren = {
      ...elements,
      animationsTitles: '[data-animation="title"]',
      animationsParagraphs: '[data-animation="paragraph"]',
      animationsLabels: '[data-animation="label"]',
      animationsSection: '[data-animation="color"]',
      animationsParallax: '[data-animation="parallax"]',
      animationsLink: '[data-animation="link"]',

      preloaders: '[data-src]'
    }

    this.transformPrefix = Prefix('transform')

    //* Gestione dello scroll
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }
  }

  // ? Metodo per creare una pagina ed ottenere tutti gli elementi utili per le animazioni etc
  create () {
    this.element = document.querySelector(this.selector)//* Ad esempio il . about mi ritorna la div.about con tutto il suo contenuto
    this.elements = {} //! Sono tutte le classi che passo dalla classe pagina  ad esempio
    //! i bottoni o altro in modo da poter fare le animazioni, entrate o uscite

    //* Gestione dello scroll
    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 0
    }

    each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry //* se é gia un query selector lo passo direttamente
      } else {
        this.elements[key] = this.element.querySelectorAll(entry) //! Se ce né piu di uno, ad esempio le immagini faccio un selector all per avere un array

        if (this.elements[key].lenght === 0) {
          this.elements[key] = null //* Se é vuoto ritorno null
        } else if (this.elements[key].lenght === 1) {
          this.elements[key] = document.querySelector(entry) //! se cé una sola di queste classi faccio un query selector cosi non mi fa un array
        }
      }
    })

    this.createAnimations()
    this.createPreloader()
  }

  createAnimations () {
    this.animations = []

    //* Title
    this.animationsTitles = map(this.elements.animationsTitles, element => {
      return new Title({ element })
    })

    this.animations.push(...this.animationsTitles)

    //* Paragraphs
    this.animationsParagraphs = map(this.elements.animationsParagraphs, element => {
      return new Paragraph({ element })
    })

    this.animations.push(...this.animationsParagraphs)

    //* SUBParagraphs
    this.animationsSection = map(this.elements.animationsSection, element => {
      return new Section({ element })
    })

    this.animations.push(...this.animationsSection)

    //* Labels
    this.animationsLabels = map(this.elements.animationsLabels, element => {
      return new Label({ element })
    })
    this.animations.push(...this.animationsLabels)

    //* Parallax
    this.animationsParallax = map(this.elements.animationsParallax, element => {
      return new Parallax({ element })
    })

    this.animations.push(...this.animationsParallax)

    //* Link
    this.animationsLink = map(this.elements.animationsLink, element => {
      return new Link({ element })
    })

    this.animations.push(...this.animationsLink)
  }

  createPreloader () {
    this.preloaders = map(this.elements.preloaders, element => {
      return new AsyncLoad({ element }) //! CREARE LE IMMAGINI DOPO CAMBIO PAGINA
    })
  }

  /**
     * //!Animation
     */
  show (animation) {
    return new Promise(resolve => {
      if (animation) {
        this.animationIn = animation
      } else {
        this.animationIn = GSAP.timeline()
        this.animationIn.fromTo(this.element, {
          autoAlpha: 0
        }, {
          autoAlpha: 1
          // onComplete: resolve
        })
      }

      this.animationIn.call(_ => {
        this.addEventListeners()
      })
    })
  }

  hide () {
    return new Promise(resolve => {
      this.destroy()
      this.animationOut = GSAP.timeline()

      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }

  destroy () {

  }

  /**
     * //!Event
     */
  //* Debug dello scroll per lo smoothscroll

  onTouchDown (event) {
    if (!DetectionManager.isPhone) return

    this.isDown = true

    this.scroll.position = this.scroll.current
    this.start = event.touches ? event.touches[0].clientY : event.clientY
  }

  onTouchMove (event) {
    if (!DetectionManager.isPhone || !this.isDown) return

    const y = event.touches ? event.touches[0].clientY : event.clientY
    const distance = (this.start - y) * 2.1

    this.scroll.target = this.scroll.position + distance
  }

  onTouchUp () {
    if (!DetectionManager.isPhone) return

    this.isDown = false
  }

  onWheel ({ pixelY }) {
    this.scroll.target += pixelY
  }

  onResize () {
    if (this.elements.wrapper) {
      this.scroll.limit = this.elements.wrapper[0].clientHeight - window.innerHeight
    }

    // each(this.animations, animation => animation.onResize())
  }

  /**
     * //!Loop
     */
  update () {
    this.scroll.target = GSAP.utils.clamp(0, this.scroll.limit, this.scroll.target)

    this.scroll.current = GSAP.utils.interpolate(this.scroll.current, this.scroll.target, 0.1)

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    if (this.elements.wrapper) {
      this.elements.wrapper[0].style[this.transformPrefix] = `translateY(-${this.scroll.current}px)`
    }

    this.animations.forEach(animation => {
      if (animation.update) {
        animation.update(this.scroll)
      }
    })
  }

  /**
     * //!Listeners
     */
  addEventListeners () {
  }

  removeEventListeners () {
  }

  //* Fine debug dello scroll

  /**
     * //!Destroy
     */

  destroy () {
    this.removeEventListeners()
  }
}
