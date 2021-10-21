/**
 * @typedef Country
 * @property {string} name
 * @property {boolean} supports_sms
 * @property {boolean} supports_voice
 */

/**
 * @typedef CountrySupport
 * @properties {Record<string,Country>} countries
 */

/**
 * @param {HTMLElement} elem
 */
function loadCountrySupportTable(elem) {
  const tbody = elem.querySelector('tbody');
  const templateRow = elem.querySelector('[data-item=template-row]');
  const successIcon = elem.querySelector('[data-item=icon-success]');
  const errorIcon = elem.querySelector('[data-item=icon-error]');
  if (!tbody || !templateRow || !successIcon || !errorIcon) {
    return;
  }

  const { idpBaseUrl, translationOptionYes, translationOptionNo } = elem.dataset;

  /**
   * @param {HTMLElement} container
   * @param {boolean} enabled
   */

  /**
   * @param {HTMLElement} cell
   * @param {boolean} enabled
   */
  const updateCell = (cell, enabled) => {
    cell.querySelector('[data-item=text]').innerText = enabled
      ? translationOptionYes
      : translationOptionNo;

    const clonedIcon = (enabled ? successIcon : errorIcon).cloneNode(true);
    clonedIcon.hidden = false;
    cell.querySelector('[data-item=icon]').appendChild(clonedIcon);
  };

  window
    .fetch(`${idpBaseUrl || ''}/api/country-support`)
    .then((response) => response.json())
    .then((/** @type CountrySupport */ { countries }) => {
      Object.values(countries)
        .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
        .forEach(({ name, supports_sms: supportsSms, supports_voice: supportsVoice }) => {
          const row = templateRow.cloneNode(true);

          row.querySelector('[data-item=country]').innerText = name;
          updateCell(row.querySelector('[data-item=sms]'), supportsSms);
          updateCell(row.querySelector('[data-item=voice]'), supportsVoice);
          tbody.appendChild(row);
        });

      tbody.removeChild(templateRow);
      elem.hidden = false;
    });
}

Array.from(document.querySelectorAll('.js-country-support')).forEach((elem) =>
  loadCountrySupportTable(elem),
);
