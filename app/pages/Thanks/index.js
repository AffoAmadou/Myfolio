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

  }
}
