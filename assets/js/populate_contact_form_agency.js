import { isLocalStorageAvailable } from './storage_availability.js';

export function setInputValueFromLocalStorage(key, dataForValue) {
  if (!isLocalStorageAvailable()) {
    return;
  }

  const value = localStorage.getItem(key);
  const inputElement = document.querySelector(`input[data-for='${dataForValue}']`);

  if (value && inputElement) {
    inputElement.value = value;
  }
}

export function populateFormAgencyValues() {
  setInputValueFromLocalStorage('agency', 'agency');
  setInputValueFromLocalStorage('integration', 'integration');
}
