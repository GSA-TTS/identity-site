import React from 'react';
import { createRoot } from 'react-dom/client';
import AddressSearch from '@18f/identity-address-search';

function verifyCanSubmitEntry() {
  const root = createRoot(document.getElementById('search-component'));
  root.render(React.createElement(AddressSearch, {}));

  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];
  if (debug && +debug.value) {
    return;
  }

  const form = document.getElementById('contact-us-form');
  const error = document.getElementById('captcha-error-message');
  const piiError = document.getElementById('pii-warning');
  const piiErrorText = document.getElementById('pii-warning-message');
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
