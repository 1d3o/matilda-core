import { Controller } from 'stimulus'
import { each } from '../utils'

class FormController extends Controller {
  static targets = ['field', 'submit']

  connect () {
    this.fields = {}

    // map fields and add listeners in case of errors classes
    each(this.fieldTargets, (field) => {
      this.fields[field.getAttribute('name')] = field
      field.addEventListener('keyup', () => field.classList.remove('is-error'))
    })

    // add submit listener to disable submit button
    this.element.addEventListener('submit', (e) => {
      this.submitTarget.setAttribute('disabled', '')
      this.submitTarget.classList.add('is-loading')
    })

    // manage required inputs
    this.manageRequiredInputs()
  }

  manageRequiredInputs () {
    this.fieldTargets.forEach((target) => {
      if (!target.hasAttribute('required')) return

      const label = this.element.querySelector(`label[for="${target.id}"]`)
      if (label && label.innerText.charAt(label.innerText.length - 1) !== '*') label.innerHTML =  `${label.innerHTML} *`
    })
  }

  /**
   * @function validateResponse
   * @param {*} event 
   */
  validateResponse (event) {
    let [data, _status, _xhr] = event.detail
    const Flash = this.application.getControllerForElementAndIdentifier(
      document.getElementById('flash'), 'flash'
    )

    if (data.result) {
      const redirect = this.data.get('redirect')
      const redirectDelay = this.data.get('redirect-delay')
      const reload = this.data.get('reload')
      const flashSuccess = this.data.get('flash-success')

      // manage redirect
      if (redirect && !redirectDelay) {
        window.location.replace(redirect)
        return
      }

      // manage reload
      if (reload) {
        location.reload()
        return
      }

      // success flash
      if (flashSuccess) {
        Flash.openMessage(flashSuccess, 'green')
      }

      // manage redirect delay
      if (redirectDelay) {
        setTimeout(() => {
          window.location.replace(redirect)
          return
        }, redirectDelay);
      }

    } else {
      let flashError = this.data.get('flash-error')

      // error flash
      if (!flashError) {
        flashError = data.errors[0].message
      }
      Flash.openMessage(flashError, 'orange')
      
      // visual errors on fields
      each(data.errors, (error) => {
        if (!this.fields[error.code]) return
        this.fields[error.code].classList.add('is-error')
      })
    }

    this.submitTarget.removeAttribute('disabled')
    this.submitTarget.classList.remove('is-loading')
  }

}

export default FormController
