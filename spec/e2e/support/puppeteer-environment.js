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

    this.global.page = await browser.newPage();
    Object.assign(this.global, global.specGlobals);
  }

  async teardown() {
    await Promise.all([super.teardown(), this.global.page.close()]);
  }
}

module.exports = PuppeteerEnvironment;
