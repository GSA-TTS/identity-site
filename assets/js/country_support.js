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
  window
    .fetch(`${elem.dataset.idpBaseUrl || ''}/api/country-support`)
    .then((response) => response.json())
    .then((/** @type CountrySupport */ { countries }) => {
      const tbody = elem.querySelector('tbody');
      const templateRow = elem.querySelector('[data-item=template-row]');
      if (!tbody || !templateRow) {
        return;
      }

      // TODO: translate
      const yesText = 'Yes ✅';
      const noText = 'No ❌';

      Object.values(countries)
        .sort(({ name: nameA }, { name: nameB }) => nameA - nameB)
        .forEach(({ name, supports_sms, supports_voice }) => {
          const row = templateRow.cloneNode(true);

          row.querySelector('[data-item=country]').innerText = name;
          row.querySelector('[data-item=sms]').innerText = supports_sms ? yesText : noText;
          row.querySelector('[data-item=voice]').innerText = supports_voice ? yesText : noText;

          tbody.appendChild(row);
        });

      tbody.removeChild(templateRow);
      elem.hidden = false;
    });
}

Array.from(document.querySelectorAll('.js-country-support')).forEach((elem) =>
  loadCountrySupportTable(elem),
);
