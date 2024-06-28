import DOMPurify from 'dompurify';

const ALLOWED_KEYS = Object.freeze(['partner', 'partner_div']);

export function storeUrlQueryParams(allowedKeys = ALLOWED_KEYS) {
  if (typeof URLSearchParams === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);

  urlParams.forEach((value, key) => {
    if (allowedKeys.includes(key)) {
      const sanitizedValue = DOMPurify.sanitize(value);
      localStorage.setItem(key, sanitizedValue);
    }
  });
}

export function removeUrlQueryParams(keysToRemove = ALLOWED_KEYS) {
  if (typeof URLSearchParams === 'undefined' || typeof window === 'undefined') {
    return;
  }

  const url = new URL(window.location.href);
  const urlParams = new URLSearchParams(url.search);

  keysToRemove.forEach((key) => urlParams.delete(key));

  url.search = urlParams.toString();
  window.history.replaceState({}, '', url.href);
}
