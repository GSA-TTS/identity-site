async function sha256(message) {
  const data = new TextEncoder().encode(message);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  const array = Array.from(new Uint8Array(buffer));
  return array.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function emailIsSpam(email, spamEmails) {
  return spamEmails.includes(sha256(email));
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
  const spamEmailDigests = (form.dataset.spamEmailAddresses || '').split(',');

  let alreadyAttemptedSubmission = false;
  form.addEventListener('submit', (event) => {
    if (emailIsSpam(emailInput.value, spamEmailDigests)) {
      event.preventDefault();
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
