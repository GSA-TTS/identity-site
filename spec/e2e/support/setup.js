import puppeteer from 'puppeteer';
import serve from './serve';
import crawl from './crawl';

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
      global.port = port;

      const rootURL = `http://localhost:${global.port}`;
      const allURLs = await crawl(new URL('sitemap.xml', rootURL));

      global.specGlobals = {
        rootURL,
        allURLs,
      };
    }),
  ]);
