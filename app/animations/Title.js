import Animation from 'classes/Animation'
import GSAP from 'gsap'
import { delay, each } from 'lodash'

import { calculate, split } from 'utils/text'

export default class Title extends Animation {
  constructor ({ element, elements }) {
    super({
      element, elements
    })

    console.log(this.element)

    split({
      element: this.element, append: true
    })

    this.elementLinesSpans = this.element.querySelectorAll('span')
  }

  animateIn () {
    // GSAP.fromTo(
    //   this.element,
    //   {
    //     autoAlpha: 0,
    //     delay: 1,
    //   },
    //   {
    //     autoAlpha: 1,
    //     duration: 1,
    //   }
    // );

    this.timelineIn = GSAP.timeline()

    this.timelineIn.fromTo(this.element, {
      autoAlpha: 0
    }, {
      autoAlpha: 1
    })

    this.elementLinesSpans.forEach((element, index) => {
      this.timelineIn.fromTo(element, {
        y: '170%'
      }, {
        delay: index * 0.2,
        duration: 1.5,
        ease: 'expo.out',
        y: '0%',
        autoAlpha: 1,
        visibility: 'visible'
      }, 0)
    })
    // each(this.elementsLinesSpans, (line, index) => {
    //   console.log(line)
    //     this.timelineIn.fromTo(line, {
    //       delay: 3,
    //         y: '100%'
    //     }, {
    //         delay: index * 0.2,
    //         duration: 5.5,
    //         ease: 'expo.out',
    //         y: '0%',
    //         autoAlpha: 1,
    //       visibility : 'visible'
    //     }, 0)
    // })
  }

  animateOut () {
    GSAP.set(this.element, {
      autoAlpha: 0
    })
  }

  onResize () {
    this.elementsLines = calculate(this.elementLinesSpans)
  }
}
