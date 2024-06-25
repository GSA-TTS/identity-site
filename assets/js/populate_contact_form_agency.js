export function setInputValueFromLocalStorage(key, inputId) {
  const value = localStorage.getItem(key);
  const inputElement = document.getElementById(inputId);

  if (value !== null && inputElement) {
    inputElement.value = value;
  }
}

export function populateFormAgencyValues() {
  setInputValueFromLocalStorage('partner', 'agency_abbreviation');
  setInputValueFromLocalStorage('partnerDiv', 'agency_division');
}
