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
  if (!tbody || !templateRow) {
    return;
  }

  const { idpBaseUrl, translationOptionYes, translationOptionNo } = elem.dataset;

  window
    .fetch(`${idpBaseUrl || ''}/api/country-support`)
    .then((response) => response.json())
    .then((/** @type CountrySupport */ { countries }) => {
      Object.values(countries)
        .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(b))
        .forEach(({ name, supports_sms, supports_voice }) => {
          const row = templateRow.cloneNode(true);

          row.querySelector('[data-item=country]').innerText = name;
          row.querySelector('[data-item=sms]').innerText = supports_sms
            ? translationOptionYes
            : translationOptionNo;
          row.querySelector('[data-item=sms-icon]').innerText = supports_sms ? '✅' : '❌';
          row.querySelector('[data-item=voice]').innerText = supports_voice
            ? translationOptionYes
            : translationOptionNo;
          row.querySelector('[data-item=voice-icon]').innerText = supports_voice ? '✅' : '❌';

          tbody.appendChild(row);
        });

      tbody.removeChild(templateRow);
      elem.hidden = false;
    });
}

Array.from(document.querySelectorAll('.js-country-support')).forEach((elem) =>
  loadCountrySupportTable(elem),
);
