const ALLOWED_KEYS = Object.freeze(['agency', 'integration']);

export function storeUrlQueryParams(allowedKeys = ALLOWED_KEYS) {
  if (typeof URLSearchParams === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);

  urlParams.forEach((value, key) => {
    if (allowedKeys.includes(key)) {
      localStorage.setItem(key, value);
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
