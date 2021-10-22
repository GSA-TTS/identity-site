/**
 * @typedef Country
 * @property {string} name
 * @property {string} country_code The international dialing code (ex "1" for the US)
 * @property {boolean} supports_sms
 * @property {boolean} supports_voice
 */

/**
 * @typedef CountrySupport
 * @property {Record<string,Country>} countries
 */

/**
 * @example
 *   prettyDialingCode('1') => '+1'
 *   prettyDialingCode('1234') => '+1-234'
 *   prettyDialingCode('789') => '+789'
 * @param {string} dialingCode
 * @return {string}
 */
const prettyDialingCode = (dialingCode) => {
  if (dialingCode.length > 1 && dialingCode.startsWith('1')) {
    return `+1-${dialingCode.slice(1)}`;
  }
  return `+${dialingCode}`;
};

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
    .then((/** @type {CountrySupport} */ { countries }) => {
      Object.entries(countries)
        .sort(([, { name: nameA }], [, { name: nameB }]) => nameA.localeCompare(nameB))
        .forEach(
          ([
            isoCode,
            {
              name,
              country_code: countryCode,
              supports_sms: supportsSms,
              supports_voice: supportsVoice,
            },
          ]) => {
            const row = templateRow.cloneNode(true);

            row.querySelector('[data-item=country]').innerText = `${name} (${isoCode})`;
            row.querySelector('[data-item=dialing-code]').innerText = prettyDialingCode(
              countryCode,
            );
            updateCell(row.querySelector('[data-item=sms]'), supportsSms);
            updateCell(row.querySelector('[data-item=voice]'), supportsVoice);
            tbody.appendChild(row);
          },
        );

      tbody.removeChild(templateRow);
      elem.hidden = false;
    });
}

Array.from(document.querySelectorAll('.js-country-support')).forEach((elem) =>
  loadCountrySupportTable(elem),
);
