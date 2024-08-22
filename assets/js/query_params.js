import { isLocalStorageAvailable } from './storage_availability.js';

const ALLOWED_KEYS = Object.freeze(['agency', 'integration']);
const CACHE_KEY = 'lastParamsUpdate';
const SEVEN_DAYS_IN_MILLISECONDS = 604800000;
const CACHE_DURATION = SEVEN_DAYS_IN_MILLISECONDS;

const currentTimeMilliseconds = () => Date.now();

function hasAllowedParams(urlParams, allowedKeys) {
  return allowedKeys.some((key) => urlParams.has(key));
}

function isCacheExpired(lastUpdate, currentTime) {
  const elapsedTime = currentTime - lastUpdate;
  return !!lastUpdate && elapsedTime > CACHE_DURATION;
}

function clearStoredParams(allowedKeys, urlParams) {
  const currentTime = currentTimeMilliseconds();
  const lastUpdate = localStorage.getItem(CACHE_KEY);

  if (hasAllowedParams(urlParams, allowedKeys) || isCacheExpired(lastUpdate, currentTime)) {
    allowedKeys.forEach((key) => localStorage.removeItem(key));
    localStorage.removeItem(CACHE_KEY);

    return true;
  }

  return false;
}

export function storeUrlQueryParams(allowedKeys = ALLOWED_KEYS) {
  if (!('URLSearchParams' in window) || !isLocalStorageAvailable()) {
    return;
  }

  let paramsStored = false;
  const urlParams = new URLSearchParams(window.location.search);

  clearStoredParams(allowedKeys, urlParams);

  allowedKeys.forEach((key) => {
    const value = urlParams.get(key);

    if (value) {
      localStorage.setItem(key, value);
      paramsStored = true;
    }
  });

  if (paramsStored) {
    const currentTime = currentTimeMilliseconds();
    localStorage.setItem(CACHE_KEY, currentTime);
  }
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
