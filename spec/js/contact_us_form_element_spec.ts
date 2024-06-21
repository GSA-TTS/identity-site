import { describe, before, beforeEach, after, test, mock } from 'node:test';
import assert from 'node:assert/strict';
import ContactUsFormElement from '../../assets/js/contact_us_form_element';

describe('ContactUsFormElement', () => {
  const now = '2023-01-20T05:00:00Z';

  before(() => {
    mock.getter(ContactUsFormElement.prototype, 'now', () => new Date(now));
  });

  after(() => {
    mock.reset();
  });

  describe('when maintenance window is not specified', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <contact-us-form></contact-us-form>
      `;
    });

    test('it does not hide', () => {
      const form = document.querySelector('contact-us-form')!;

      assert.equal(form.hasAttribute('hidden'), false);
    });
  });

  describe('when outside the specified maintenance window', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <contact-us-form
          maintenance-start-time="2023-01-21T00:00:00Z"
          maintenance-end-time="2023-01-21T10:00:00Z"
        ></contact-us-form>
      `;
    });

    test('it does not hide', () => {
      const form = document.querySelector('contact-us-form')!;

      assert.equal(form.hasAttribute('hidden'), false);
    });

    describe('with alert element present', () => {
      beforeEach(() => {
        document.body.innerHTML = `
          <div id="alert-container" hidden></div>
          <contact-us-form
            maintenance-alert-id="alert-container"
            maintenance-start-time="2023-01-21T00:00:00Z"
            maintenance-end-time="2023-01-21T10:00:00Z"
          ></contact-us-form>
        `;
      });

      test('it removes alert element', () => {
        assert.equal(document.getElementById('alert-container'), null);
      });
    });
  });

  describe('when inside the specified maintenance window', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <contact-us-form
          maintenance-start-time="2023-01-20T00:00:00Z"
          maintenance-end-time="2023-01-20T10:00:00Z"
        ></contact-us-form>
      `;
    });

    test('it hides', () => {
      const form = document.querySelector('contact-us-form')!;

      assert.equal(form.hasAttribute('hidden'), true);
    });

    describe('when an associated alert exists', () => {
      beforeEach(() => {
        document.body.innerHTML = `
          <div id="alert-container" class="usa-alert usa-alert--warning" hidden>
            <div class="usa-alert__body">
              <p class="usa-alert__text">
                Outage from <strong>%{start_time}</strong> to <strong>%{end_time}</strong>
              </p>
            </div>
          </div>
          <contact-us-form
            maintenance-alert-id="alert-container"
            maintenance-start-time="2023-01-20T00:00:00Z"
            maintenance-end-time="2023-01-20T10:00:00Z"
          ></contact-us-form>
        `;
      });

      test('it unhides the alert', () => {
        const alertContainer = document.getElementById('alert-container')!;

        assert.equal(alertContainer.hasAttribute('hidden'), false);
      });

      test('it formats time strings in the alert text', () => {
        const alertContainer = document.getElementById('alert-container')!;

        assert.match(
          alertContainer.textContent!.trim(),
          /Outage from January \d+, 2023 at \d+:\d+\s[AP]M\s[A-Z]+ to January \d+, 2023 at \d+:\d+\s[AP]M\s[A-Z]+/,
        );
      });
    });
  });
});
