/**
 * Checks if a given type of web storage is available and functioning.
 *
 * @param type The type of storage to check ('localStorage' or 'sessionStorage').
 *
 * @return True if the storage is available, false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === 'QuotaExceededError' &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

/**
 * Checks if localStorage is available and functioning.
 *
 * @return True if localStorage is available, false otherwise.
 */
export function isLocalStorageAvailable() {
  return storageAvailable('localStorage');
}
