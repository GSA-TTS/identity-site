import DOMPurify from 'dompurify';

export function storeUrlQueryParams() {
  if (typeof URLSearchParams === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const allowedKeys = ['partner', 'partnerDiv'];

  urlParams.forEach((value, key) => {
    if (allowedKeys.includes(key)) {
      const sanitizedValue = DOMPurify.sanitize(value);
      localStorage.setItem(key, sanitizedValue);
    }
  });
}
