const puppeteer = require('puppeteer');
const NodeEnvironment = require('jest-environment-node');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    const [, browser] = await Promise.all([
      super.setup(),
      puppeteer.connect({
        browserWSEndpoint: global.wsEndpoint,
      }),
    ]);

    this.global.rootURL = `http://localhost:${global.port}`;
    this.global.page = await browser.newPage();
  }

  async teardown() {
    await Promise.all([super.teardown(), this.global.page.close()]);
  }
}

module.exports = PuppeteerEnvironment;
