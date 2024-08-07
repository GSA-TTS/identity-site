import { isLocalStorageAvailable } from './storage_availability.js';

const ALLOWED_KEYS = Object.freeze(['agency', 'integration']);

export function storeUrlQueryParams(allowedKeys = ALLOWED_KEYS) {
  if (!('URLSearchParams' in window) || !isLocalStorageAvailable()) {
    return;
  }

  const urlParams = new URLSearchParams(window.location.search);

  allowedKeys.forEach((key) => {
    const value = urlParams.get(key);

    if (value) {
      localStorage.setItem(key, value);
    }
  });
}

export function removeUrlQueryParams(keysToRemove = ALLOWED_KEYS) {
  if (!('URL' in window)) {
    return;
  }

  const url = new URL(window.location.href);
  let changed = false;

  keysToRemove.forEach((key) => {
    if (url.searchParams.has(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  if (changed) {
    window.history.replaceState({}, '', url.toString());
  }
}
