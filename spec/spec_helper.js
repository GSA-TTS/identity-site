import { JSDOM } from 'jsdom';
import { beforeEach, after } from 'node:test';
import setup from './e2e/support/setup';
import teardown from './e2e/support/teardown';

await setup();

const dom = new JSDOM('<!doctype html><title>JSDOM</title>', { url: 'http://example.test' });

global.window = dom.window;
const windowGlobals = Object.fromEntries(
  Object.getOwnPropertyNames(window)
    .filter((key) => !(key in global))
    .map((key) => [key, window[key]]),
);
Object.assign(global, windowGlobals);

beforeEach(() => {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
});

after(() => teardown());
