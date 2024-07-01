import { populateFormAgencyValues } from './populate_contact_form_agency.js';

function verifyCanSubmitEntry() {
  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];
  if (debug && +debug.value) {
    return;
  }

  const form = document.getElementById('contact-us-form');
  const error = document.getElementById('captcha-error-message');
  const piiError = document.getElementById('pii-warning');
  const descriptionInput = document.getElementById('description');
  let alreadyAttemptedSubmission = false;
  form.addEventListener('submit', (event) => {
    const captcha = document.getElementById('g-recaptcha-response');
    if (!captcha || !captcha.value) {
      event.preventDefault();
      error.textContent = error.dataset.error;
      error.classList.remove('display-none');
    } else if (descriptionInput.value.match(/\d{4,}/) && !alreadyAttemptedSubmission) {
      alreadyAttemptedSubmission = true;
      event.preventDefault();
      piiError.hidden = false;
    }
  });

  descriptionInput.addEventListener('change', (_) => {
    alreadyAttemptedSubmission = false;
    piiError.hidden = true;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  verifyCanSubmitEntry();
  populateFormAgencyValues();
});

window.clearCaptchaError = () => {
  const error = document.getElementById('captcha-error-message');
  if (error.textContent) {
    error.textContent = '';
    error.classList.add('display-none');
  }
};
