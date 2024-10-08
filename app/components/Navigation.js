import Component from 'classes/Component'
import { mapEach } from 'utils/dom'
import Link from 'animations/Link'
export default class Navigation extends Component {
  constructor () {
    super({
      element: '.navigation',
      elements: {
        links: '.navigation__list__link'
      }
    })
    this.links = mapEach(this.elements.links, element => {
      return new Link({
        element
      })
    })
  }
}
