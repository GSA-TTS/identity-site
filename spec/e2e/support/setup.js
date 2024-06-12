import puppeteer from 'puppeteer';
import serve from './serve.js';
import crawl from './crawl.js';

export default () =>
  Promise.all([
    puppeteer
      .launch({
        headless: process.env.PUPPETEER_HEADLESS !== 'false',
      })
      .then((browser) => {
        global.browser = browser;
        process.env.PUPPETEER_WS_ENDPOINT = browser.wsEndpoint();
      }),
    serve().then(async ({ server, port }) => {
      global.server = server;

      const rootURL = `http://localhost:${port}`;

      process.env.ROOT_URL = rootURL;
      process.env.ALL_URLS = JSON.stringify(await crawl(new URL('sitemap.xml', rootURL)));
    }),
  ]);
