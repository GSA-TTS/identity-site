/**
 * @jest-environment jsdom
 */

import { getByLabelText, getByRole, waitFor, getAllByText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setImmediate } from 'timers/promises';

describe('Post Office Search', () => {
  // This is simulated since the test env doesn't support fetch
  const testServerPort = 9835;
  const locationsSearchUrl = `http://127.0.0.1:${testServerPort}/api/usps_locations`;

  beforeEach(() => {
    if ('fetch' in global) {
      jest.spyOn(global, 'fetch');
    } else {
      // @ts-ignore
      global.fetch = jest.fn();
    }
    (global.fetch as jest.Mock).mockImplementation(() => ({
      get ok() {
        return true;
      },
      json: jest.fn(() => []),
      get headers() {
        return new Headers();
      },
    }));
  });

  let container: HTMLDivElement;
  let user: ReturnType<typeof userEvent['setup']>;

  beforeEach(async () => {
    user = userEvent.setup();
    await act(async () => {
      container = document.createElement('div');
      container.id = 'post-office-search';
      container.dataset.locationsSearchUrl = locationsSearchUrl;
      document.body.appendChild(container);
      jest.isolateModules(() => {
        // eslint-disable-next-line global-require
        require('../../assets/js/post_office_search');
      });

      // Wait for React to finish any asynchronous work
      await setImmediate();
    });
  });

  afterEach(() => {
    if (container) {
      act(() => {
        container.remove();
      });
    }
  });

  const getAddressField = function () {
    return getByLabelText(
      document.body,
      'in_person_proofing.body.location.po_search.address_label',
    );
  };

  const getCityField = function () {
    return getByLabelText(document.body, 'in_person_proofing.body.location.po_search.city_label');
  };

  const getStateField = function () {
    return getByLabelText(document.body, 'in_person_proofing.body.location.po_search.state_label');
  };

  const getZipcodeField = function () {
    return getByLabelText(
      document.body,
      'in_person_proofing.body.location.po_search.zipcode_label',
    );
  };

  const getSearchButton = function () {
    return getByRole(container, 'button', {
      name: 'in_person_proofing.body.location.po_search.search_button',
    });
  };

  const testData = {
    address: '1600 W Pennsylvania Ave',
    city: 'Washington',
    state: 'DC',
    zipcode: '20500',
  };

  function getFormElements() {
    const addressField = getAddressField();
    const cityField = getCityField();
    const stateField = getStateField();
    const zipcodeField = getZipcodeField();
    const searchButton = getSearchButton();
    return { addressField, cityField, stateField, zipcodeField, searchButton };
  }

  it('renders post office search form fields that are enabled', () => {
    const { addressField, cityField, stateField, zipcodeField, searchButton } = getFormElements();

    expect(addressField).toBeEnabled();
    expect(cityField).toBeEnabled();
    expect(stateField).toBeEnabled();
    expect(zipcodeField).toBeEnabled();

    expect(addressField).toBeVisible();
    expect(cityField).toBeVisible();
    expect(stateField).toBeVisible();
    expect(zipcodeField).toBeVisible();
    expect(searchButton).toBeVisible();
  });

  describe('when searching', () => {
    it('allows search field input', async () => {
      const { addressField, cityField, stateField, zipcodeField } = getFormElements();

      await act(async () => {
        await user.clear(addressField);
        await user.clear(cityField);
        await user.clear(zipcodeField);

        await user.type(addressField, testData.address);
        await user.type(cityField, testData.city);
        await user.selectOptions(stateField, testData.state);
        await user.type(zipcodeField, testData.zipcode);
      });

      await waitFor(() => {
        expect(addressField).toHaveValue(testData.address);
        expect(cityField).toHaveValue(testData.city);
        expect(stateField).toHaveValue(testData.state);
        expect(zipcodeField).toHaveValue(testData.zipcode);
      });
    });

    describe('submitting', () => {
      describe('invalid input', () => {
        beforeEach(async () => {
          const button = getSearchButton();
          await act(async () => {
            await user.click(button);
          });
        });

        it('shows an error', () => {
          const errorMessage = 'simple_form.required.text';
          const requiredErrorMessages = getAllByText(document.body, 'simple_form.required.text');
          expect(container).toHaveTextContent(errorMessage);
          expect(requiredErrorMessages).toHaveLength(4);
        });

        it('does not result in any fetch requests', () => {
          expect(global.fetch).not.toHaveBeenCalled();
        });
      });

      describe('valid input with no results', () => {
        beforeEach(async () => {
          const { addressField, cityField, stateField, zipcodeField } = getFormElements();

          const button = getSearchButton();
          await act(async () => {
            await user.clear(addressField);
            await user.clear(cityField);
            await user.clear(zipcodeField);

            await user.type(addressField, testData.address);
            await user.type(cityField, testData.city);
            await user.selectOptions(stateField, testData.state);
            await user.type(zipcodeField, testData.zipcode);

            await user.click(button);
          });
        });

        it('sends at least one fetch request', () => {
          expect(global.fetch).toHaveBeenCalled();
        });
      });
    });
  });
});
