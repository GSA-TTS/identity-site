/** @type {import('puppeteer').Page} */
export const page = global.page;

/** @type {string} */
export const rootURL = global.rootURL;

export function getURL(path) {
  return new URL(path, rootURL).toString();
}

export async function goto(path) {
  return page.goto(getURL(path));
}
