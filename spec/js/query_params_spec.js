import { describe, it, mock, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';
import { storeUrlQueryParams } from '../../assets/js/query_params.js';

describe('URL query parameters', () => {
  const FIXED_TIMESTAMP = 1724339456350;
  const CACHE_KEY = 'lastParamsUpdate';
  let jsdom;

  function setTestUrl(newUrl = 'https://test.com/') {
    const url = new URL(newUrl);
    global.window.history.replaceState({}, '', url);
  }

  beforeEach(() => {
    mock.timers.enable({ apis: ['Date'], now: FIXED_TIMESTAMP });
    jsdom = new JSDOM('', { url: 'https://test.com' });

    global.window = jsdom.window;
    global.URLSearchParams = jsdom.window.URLSearchParams;
    global.localStorage = jsdom.window.localStorage;
  });

  afterEach(() => {
    mock.timers.reset();
    jsdom.window.close();

    delete global.window;
    delete global.URLSearchParams;
    delete global.localStorage;
  });

  describe('storeUrlQueryParams', () => {
    it('stores permitted query params in localStorage', () => {
      setTestUrl('https://test.com/?agency=gsa&integration=abc&invalid=ignored');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), 'gsa');
      assert.strictEqual(localStorage.getItem('integration'), 'abc');
      assert.strictEqual(localStorage.getItem(CACHE_KEY), FIXED_TIMESTAMP.toString());
    });

    it('ignores invalid query params', () => {
      setTestUrl('https://test.com/?agency=gsa&integration=abc&invalid=ignored');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('invalid'), null);
    });

    it('clears stored params when new params are present', () => {
      setTestUrl('https://test.com/?agency=gsa');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), 'gsa');

      setTestUrl('https://test.com/?integration=abc');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), null);
      assert.strictEqual(localStorage.getItem('integration'), 'abc');
    });

    it('clears stored params when cache is expired', () => {
      setTestUrl('https://test.com/?agency=gsa');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), 'gsa');

      const EIGHT_DAYS_IN_MILLISECONDS = 691200000;
      mock.timers.tick(EIGHT_DAYS_IN_MILLISECONDS);

      setTestUrl('https://test.com/');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), null);
      assert.strictEqual(localStorage.getItem(CACHE_KEY), null);
    });

    it('does not clear stored params when cache is not expired and no new params', () => {
      setTestUrl('https://test.com/?agency=gsa');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), 'gsa');

      const initialCacheTime = localStorage.getItem(CACHE_KEY);
      const SIX_DAYS_IN_MILLISECONDS = 518400000;
      mock.timers.tick(SIX_DAYS_IN_MILLISECONDS);

      setTestUrl('https://test.com/');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem('agency'), 'gsa');
      assert.strictEqual(localStorage.getItem(CACHE_KEY), initialCacheTime);
    });

    it('updates cache key only when new params are stored', () => {
      setTestUrl('https://test.com/?agency=gsa');
      storeUrlQueryParams();
      const initialCacheTime = localStorage.getItem(CACHE_KEY);

      setTestUrl('https://test.com/?agency=gsa');
      storeUrlQueryParams();

      assert.strictEqual(localStorage.getItem(CACHE_KEY), initialCacheTime);

      mock.timers.tick(1000);
      setTestUrl('https://test.com/?integration=new');
      storeUrlQueryParams();

      assert.notStrictEqual(localStorage.getItem(CACHE_KEY), initialCacheTime);
    });
  });
});
