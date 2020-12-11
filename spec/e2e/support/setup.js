import puppeteer from 'puppeteer';
import serve from './serve';

export default async () =>
  Promise.all([
    puppeteer
      .launch({
        headless: process.env.PUPPETEER_HEADLESS !== 'false',
      })
      .then((browser) => {
        global.browser = browser;
        global.wsEndpoint = browser.wsEndpoint();
      }),
    serve().then(({ server, port }) => {
      global.server = server;
      global.port = port;
    }),
  ]);
