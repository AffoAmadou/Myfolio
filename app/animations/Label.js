import Animation from 'classes/Animation'
import GSAP from 'gsap'
import { each } from 'lodash'

import { calculate, split } from 'utils/text'

export default class Label extends Animation {
  constructor ({ element, elements }) {
    super({
      element, elements
    })
    // this.elementLinesSpans = split({ element: this.element, append: true })
  }

  animateIn () {
    GSAP.fromTo(
      this.element,
      {
        autoAlpha: 0
      },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 0.7

      }
    )
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  // onResize() {
  //     this.elementsLines = calculate(this.elementLinesSpans)
  // }
}
