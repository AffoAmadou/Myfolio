import Page from 'classes/Page'

export default class Thanks extends Page {
  constructor () {
    super({
      id: 'thanks',
      element: '.thanks',
      elements: {
        navigation: document.querySelector('.navigation')

      }
    })
  }

  create () {
    super.create()

    // this.elements.links[0].addEventListener('click', _ => console.log('OH YOU CLICKED'))
  }
}
