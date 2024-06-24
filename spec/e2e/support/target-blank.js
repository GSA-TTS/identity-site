/**
 * @typedef {Pick<HTMLAnchorElement, "innerText" | "href" | "target">} SimplifiedLink
 */

/**
 * @param {import('puppeteer').Page} page
 * @return {Promise<SimplifiedLink[]>}
 */
function getCandidateLinks(page) {
  return page.$$eval('a', (aTags) =>
    aTags
      // Exclude form links from new tab enforcement.
      // See: https://www.w3.org/TR/WCAG20-TECHS/G200.html
      .filter((a) => !a.closest('form'))
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

export { getCandidateLinks };
