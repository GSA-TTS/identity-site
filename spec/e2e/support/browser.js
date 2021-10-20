/** @type {{page: import('puppeteer').Page}} */
export const { page } = global;

/** @type {{rootURL: string}} */
export const { rootURL } = global;

export function getURL(path) {
  return new URL(path, rootURL).toString();
}

export function goto(path) {
  return page.goto(getURL(path));
}
