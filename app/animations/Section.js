import Animation from 'classes/Animation'
import GSAP from 'gsap'
import { each } from 'lodash'

import { calculate, split } from 'utils/text'

export default class Section extends Animation {
  constructor ({ element, elements }) {
    super({
      element, elements
    })
  }

  animateIn () {
    this.timelineIn = GSAP.timeline({
      delay: 0.5
    })

    this.timelineIn.set(this.element, {
      // autoAlpha: 1
    })

    this.timelineIn.to('.navigation__list__link', {
      color: '#EFEFEF'
    })

    this.timelineIn.to('.navigation__logo__image', {
      fill: '#EFEFEF'
    })

    // each(this.element, (line, index) => {
    this.timelineIn.fromTo(this.element, {
      backgroundColor: '#EFEFEF',
      color: '#1B1B19',
      overwrite: 'auto'

    }, {

      backgroundColor: this.element.dataset.color,
      color: '#EFEFEF',
      overwrite: 'auto'
    }, 0)
  }

  animateOut () {
    this.timelineOut = GSAP.timeline({
      delay: 0.5
    })

    this.timelineOut.set(this.element, {
      backgroundColor: '#EFEFEF',
      color: '#1B1B19',
      overwrite: 'auto'
    })

    this.timelineOut.set('.navigation__list__link', {
      color: '#1B1B19'
    })

    this.timelineOut.set('.navigation__logo__image', {
      fill: '#1B1B19'
    })
  }

  onResize () {
    // this.elementsLines = calculate(this.elementLinesSpans)
  }
}
