const puppeteer = require('puppeteer');
const NodeEnvironment = require('jest-environment-node');

class PuppeteerEnvironment extends NodeEnvironment {
  async setup() {
    const [, browser] = await Promise.all([
      super.setup(),
      puppeteer.connect({
        browserWSEndpoint: process.env.PUPPETEER_WS_ENDPOINT,
      }),
    ]);

    this.global.page = await browser.newPage();
    Object.assign(this.global, global.specGlobals);
  }

  async teardown() {
    await super.teardown();
    if (this.global.page) {
      await this.global.page.close();
    }
  }
}

module.exports = PuppeteerEnvironment;
