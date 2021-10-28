/** @type {{page: import('puppeteer').Page}} */
export const { page } = global;

export function getURL(path) {
  return new URL(path, process.env.ROOT_URL).toString();
}

export function goto(path) {
  return page.goto(getURL(path));
}
