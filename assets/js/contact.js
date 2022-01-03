function bindCaptchaValidation() {
  const debug = Array.prototype.slice.apply(document.getElementsByName('debug'))[0];
  if (debug && +debug.value) {
    return;
  }

  const form = document.getElementById('contact-us-form');
  const error = document.getElementById('captcha-error-message');

  form.addEventListener('submit', (event) => {
    const captcha = document.getElementById('g-recaptcha-response');
    if (!captcha || !captcha.value) {
      event.preventDefault();
      error.textContent = error.dataset.error;
      error.className = error.className.replace(/(\s*)display-none(\s*)/, '$1$2');
    }
  });
}
document.addEventListener('DOMContentLoaded', bindCaptchaValidation);

window.clearCaptchaError = () => {
  const error = document.getElementById('captcha-error-message');
  if (error.textContent) {
    error.textContent = '';
    error.className += ' display-none';
  }
};
