function bindCaptchaValidation() {
  const form = document.getElementById('contact-us-form');
  const error = document.getElementById('captcha-error-message');

  form.addEventListener('submit', (event) => {
    const captcha = document.getElementById('g-recaptcha-response');
    if (!captcha || !captcha.value) {
      event.preventDefault();
      error.textContent = error.dataset.error;
    }
  });
}
document.addEventListener('DOMContentLoaded', bindCaptchaValidation);

window.clearCaptchaError = () => {
  const error = document.getElementById('captcha-error-message');
  if (error.textContent) {
    error.textContent = '';
  }
};
