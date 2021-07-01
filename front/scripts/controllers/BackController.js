import { Controller } from 'stimulus'

class BackController extends Controller {
  connect() {
    if (!document.referrer == "") {
      this.element.style.display = 'block'
    }
  }

  goBack(e) {
    e.preventDefault()
    window.history.back()
  }
}

export default BackController