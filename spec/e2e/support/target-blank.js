/**
 * @typedef {Pick<HTMLAnchorElement, "innerText" | "href" | "target">} SimplifiedLink
 */

/**
 * Returns true if the element is inside a form, or false otherwise.
 *
 * @param {Element} element
 *
 * @return {boolean}
 */
const isInForm = (element) => !!element.closest('form');

/**
 * Returns true if the given link should be considered an exception to enforcement of links opening
 * in the same tab.
 *
 * Refer to WCAG guidance on qualifying situations.
 *
 * @see https://www.w3.org/TR/WCAG20-TECHS/G200.html
 *
 * @param {HTMLAnchorElement} link
 *
 * @return {boolean}
 */
const isNewTabLinkException = (link) => isInForm(link);

/**
 * @param {import('puppeteer').Page} page
 * @return {Promise<SimplifiedLink[]>}
 */
function getCandidateLinks(page) {
  return page.$$eval('a', (aTags) =>
    aTags
      .filter((a) => !isNewTabLinkException(a))
      .map((a) =>
        // Get the info we want across the Chrome DevTools Protocol
        ({
          innerText: a.innerText.trim(),
          href: a.href,
          target: a.target,
        }),
      ),
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

export { getCandidateLinks, toNotHaveTargetBlank };
