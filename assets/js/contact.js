function verifyCanSubmitEntry() {
  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];
  if (debug && +debug.value) {
    return;
  }

  const form = document.getElementById('contact-us-form');
  const error = document.getElementById('captcha-error-message');
  const piiError = document.getElementById('pii-warning-message');
  const descriptionInput = document.getElementById('description')
  let counter = 0
  form.addEventListener('submit', (event) => {
    const captcha = document.getElementById('g-recaptcha-response');
    if (!captcha || !captcha.value) {
      event.preventDefault();
      error.textContent = error.dataset.error;
      error.classList.remove('display-none');
    } else if(descriptionInput.value.match(/\d{4,}/) && counter < 1 ) {
      counter = counter + 1 
      event.preventDefault();
      piiError.textContent = piiError.dataset.error;
      return false
    }
  });

  descriptionInput.addEventListener('change', (event) => {
    counter = 0
    if (piiError.textContent) {
      piiError.textContent = '';
    }
  })
}
document.addEventListener('DOMContentLoaded', verifyCanSubmitEntry);

window.clearCaptchaError = () => {
  const error = document.getElementById('captcha-error-message');
  if (error.textContent) {
    error.textContent = '';
    error.classList.add('display-none');
  }
};
