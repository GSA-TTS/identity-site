import { sha256 } from 'js-sha256';

function sha256Hex(message) {
  const hash = sha256.create();
  hash.update(message);
  return hash.hex();
}

function verifyCanSubmitEntry() {
  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];
  if (debug && +debug.value) {
    return;
  }

  const form = document.getElementById('contact-us-form');
  const error = document.getElementById('captcha-error-message');
  const piiError = document.getElementById('pii-warning');
  const piiErrorText = document.getElementById('pii-warning-message');
  const descriptionInput = document.getElementById('description');
  const emailInput = document.getElementById('email');
  const spamEmailDigests = (form.dataset.spamEmailAddresses || '').split(',').filter(Boolean);

  let alreadyAttemptedSubmission = false;
  form.addEventListener('submit', (event) => {
    if (spamEmailDigests.includes(sha256Hex(emailInput.value))) {
      event.preventDefault();
      window.location = '/';
      return;
    }

    const captcha = document.getElementById('g-recaptcha-response');
    if (!captcha || !captcha.value) {
      event.preventDefault();
      error.textContent = error.dataset.error;
      error.classList.remove('display-none');
    } else if (descriptionInput.value.match(/\d{4,}/) && !alreadyAttemptedSubmission) {
      alreadyAttemptedSubmission = true;
      event.preventDefault();
      piiError.classList.remove('display-none');
      piiErrorText.textContent = piiErrorText.dataset.error;
    }
  });

  descriptionInput.addEventListener('change', (_) => {
    alreadyAttemptedSubmission = false;
    if (piiErrorText.textContent) {
      piiError.classList.add('display-none');
      piiErrorText.textContent = '';
    }
  });
}
document.addEventListener('DOMContentLoaded', verifyCanSubmitEntry);

window.clearCaptchaError = () => {
  const error = document.getElementById('captcha-error-message');
  if (error.textContent) {
    error.textContent = '';
    error.classList.add('display-none');
  }
};
