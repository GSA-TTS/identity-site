import puppeteer from 'puppeteer';
import serve from './serve';
import crawl from './crawl';

export default async () => {
  const [browser, { server, port }] = await Promise.all([
    puppeteer.launch({
      headless: process.env.PUPPETEER_HEADLESS !== 'false',
    }),
    serve(),
  ]);

  global.browser = browser;
  global.server = server;

  const rootURL = `http://localhost:${port}`;

  process.env.ROOT_URL = rootURL;
  process.env.ALL_URLS = JSON.stringify(await crawl(new URL('sitemap.xml', rootURL)));
};
