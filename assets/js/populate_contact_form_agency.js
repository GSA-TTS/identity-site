import { isLocalStorageAvailable } from './storage_availability.js';

export function setInputValueFromLocalStorage(key, inputId) {
  if (!isLocalStorageAvailable()) {
    return;
  }

  const value = localStorage.getItem(key);
  const inputElement = document.getElementById(inputId);

  if (value && inputElement) {
    inputElement.value = value;
  }
}

export function populateFormAgencyValues() {
  setInputValueFromLocalStorage('agency', '00N3d0000013vIB');
  setInputValueFromLocalStorage('integration', '00N3d0000013vIC');
}
