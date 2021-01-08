/**
 * @typedef SimplifiedLink
 *
 * @prop {string} innerText
 * @prop {string} href
 * @prop {string} className
 * @prop {string} target
 */

/**
 * @param {import('puppeteer').Page} page */
 * @return {Promise<SimplifiedLink[]>}
 */
async function getLinks(page) {
  return await page.evaluate(() =>
    Array.prototype.map.call(document.querySelectorAll('a'), (a) => {
      // There's a weird serialization boundary here so we encode the links as a structure
      return {
        innerText: a.innerText.trim(),
        href: a.href,
        target: a.target,
      };
    }),
  );
}

/**
 * @param {SimplifiedLink} a
 */
function toNotHaveTargetBlank(a) {
  return {
    pass: a.target !== '_blank',
    message: () => `Link "${a.innerText}" to ${a.href} had target=_blank, but it should not have`,
  };
}

export { getLinks, toNotHaveTargetBlank };
