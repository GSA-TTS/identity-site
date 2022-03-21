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
  if (dialingCode.length > 1 && dialingCode.indexOf('1') === 0) {
    return `+1-${dialingCode.slice(1)}`;
  }
  return `+${dialingCode}`;
};

/**
 * @typedef {(input: RequestInfo, init?: RequestInit) => Promise<Response>} Fetch
 */

/**
 * @param {HTMLElement} elem
 * @param {Fetch} fetch
 */
function loadCountrySupportTable(elem, fetch) {
  const tbody = elem.querySelector('tbody');
  const templateRow = elem.querySelector('[data-item=template-row]');
  const successIcon = elem.querySelector('[data-item=icon-success]');
  const errorIcon = elem.querySelector('[data-item=icon-error]');
  if (!tbody || !templateRow || !successIcon || !errorIcon) {
    return;
  }

  const { idpBaseUrl, translationOptionYes, translationOptionNo, locale } = elem.dataset;

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

  fetch(`${idpBaseUrl || ''}/api/country-support`)
    .then((response) => response.json())
    .then((/** @type {CountrySupport} */ { countries }) => {
      Object.entries(countries)
        .sort(([_isoCodeA, { name: a }], [_isoCodeB, { name: b }]) => a.localeCompare(b))
        .forEach(
          ([
            isoCode,
            {
              name,
              translated_names: translatedNames,
              country_code: countryCode,
              supports_sms: supportsSms,
              supports_voice: supportsVoice,
            },
          ]) => {
            const row = templateRow.cloneNode(true);
            let translatedName = name
            if (translatedNames) {
              translatedName = translatedNames[locale] || name
            }
            row.querySelector('[data-item=country]').innerText = `${translatedName} (${isoCode})`;
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

/** @type {Promise<Fetch>} */
const fetchPromise =
  'fetch' in window
    ? new Promise((resolve) => resolve(window.fetch))
    : import(/* webpackChunkName: "whatwg-fetch" */ 'whatwg-fetch').then(({ fetch }) => fetch);

fetchPromise.then((fetch) => {
  Array.from(document.querySelectorAll('.js-country-support')).forEach((elem) =>
    loadCountrySupportTable(elem, fetch),
  );
});
