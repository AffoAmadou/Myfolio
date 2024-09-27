import Animation from 'classes/Animation'
import GSAP from 'gsap'
import { each } from 'lodash'

import { CSS } from '../utils/easings'

import { calculate, split } from 'utils/text'

export default class Paragraph extends Animation {
  constructor ({ element, elements }) {
    super({
      element, elements
    })

    split({
      element: this.element
    })
    split({
      element: this.element
    })
    this.elementLinesSpans = this.element.querySelectorAll('span span')
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
        y: '100%'
      }, {
        delay: index * 0.01,
        duration: 1.2,
        ease: 'back.inOut',
        y: '0%',
        autoAlpha: 1,
        visibility: 'visible'
      }, 0)
    })

    // each(this.elementLinesSpans, (line, lineIndex) => {

    //     line.style.transition = `transform 1.5s ${lineIndex * 0.1}s ${CSS}`;
    //     line.style[this.transformPrefix] = 'translateY(0)';

    // });
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
