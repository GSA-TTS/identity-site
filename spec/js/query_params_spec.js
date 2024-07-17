import { describe, it } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';
import { storeUrlQueryParams, removeUrlQueryParams } from '../../assets/js/query_params.js';

function setupTestEnvironment(url) {
  const dom = new JSDOM('', { url });
  global.window = dom.window;
  global.localStorage = dom.window.localStorage;
  global.URLSearchParams = dom.window.URLSearchParams;
  return dom;
}

describe('URL query parameters', () => {
  describe('storeUrlQueryParams', () => {
    it('stores permitted query params in localStorage', () => {
      setupTestEnvironment('https://site.com/?agency=gsa&integration=abc&invalid=ignored');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), 'gsa');
      assert.strictEqual(localStorage.getItem('integration'), 'abc');
    });

    it('ignores invalid query params', () => {
      setupTestEnvironment('https://site.com/?agency=gsa&integration=abc&invalid=ignored');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('invalid'), null);
    });
  });

  describe('removeUrlQueryParams', () => {
    it('removes permitted query params from URL', () => {
      const dom = setupTestEnvironment(
        'https://site.com/?agency=gsa&integration=abc&invalid=ignored',
      );
      removeUrlQueryParams();

      assert.strictEqual(dom.window.location.href, 'https://site.com/?invalid=ignored');
    });
  });
});
