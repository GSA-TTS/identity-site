/**
 * @jest-environment jsdom
 */

import ContactUsFormElement from '../../assets/js/contact_us_form_element';

describe('ContactUsFormElement', () => {
  const now = '2023-01-20T05:00:00Z';

  beforeAll(() => {
    jest
      .spyOn(ContactUsFormElement.prototype, 'now', 'get')
      .mockImplementation(() => new Date(now));
  });

  describe('when maintenance window is not specified', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <contact-us-form></contact-us-form>
      `;
    });

    test('it does not hide', () => {
      const form = document.querySelector('contact-us-form')!;

      expect(form.hasAttribute('hidden')).toStrictEqual(false);
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

      expect(form.hasAttribute('hidden')).toStrictEqual(false);
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

      expect(form.hasAttribute('hidden')).toStrictEqual(true);
    });

    describe('when an associated alert exists', () => {
      beforeEach(() => {
        document.body.innerHTML = `
          <div id="alert-container" hidden"></div>
          <contact-us-form
            maintenance-alert-id="alert-container"
            maintenance-start-time="2023-01-20T00:00:00Z"
            maintenance-end-time="2023-01-20T10:00:00Z"
          ></contact-us-form>
        `;
      });

      test('it unhides the alert', () => {
        const form = document.getElementById('alert-container')!;

        expect(form.hasAttribute('hidden')).toStrictEqual(false);
      });
    });
  });
});
