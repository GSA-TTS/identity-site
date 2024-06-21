import { describe, beforeEach, afterEach, it, mock } from 'node:test';
import assert from 'node:assert/strict';
import { getByLabelText, getByRole, waitFor, getAllByText } from '@testing-library/dom';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setImmediate } from 'timers/promises';
import { render } from '../../assets/js/post_office_search';

describe('Post Office Search', () => {
  // This is simulated since the test env doesn't support fetch
  const testServerPort = 9835;
  const locationsSearchUrl = `http://127.0.0.1:${testServerPort}/api/usps_locations`;
  let fetchMock: ReturnType<typeof mock.method>;

  beforeEach(() => {
    fetchMock = mock.method(global, 'fetch', () => ({
      get ok() {
        return true;
      },
      json: mock.fn(() => []),
      get headers() {
        return new Headers();
      },
    }));
  });

  let container: HTMLDivElement;
  let user: ReturnType<(typeof userEvent)['setup']>;

  beforeEach(async () => {
    user = userEvent.setup();
    await act(async () => {
      container = document.createElement('div');
      container.id = 'post-office-search';
      container.dataset.locationsSearchUrl = locationsSearchUrl;
      document.body.appendChild(container);
      render();

      // Wait for React to finish any asynchronous work
      await setImmediate();
    });
  });

  afterEach(() => {
    mock.restoreAll();
    if (container) {
      act(() => {
        container.remove();
      });
    }
  });

  const getField = function (labelName: string): HTMLInputElement {
    return getByLabelText(document.body, `in_person_proofing.body.location.po_search.${labelName}`);
  };

  const getSearchButton = function (): HTMLButtonElement {
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
    const addressField = getField('address_label');
    const cityField = getField('city_label');
    const stateField = getField('state_label');
    const zipcodeField = getField('zipcode_label');
    const searchButton = getSearchButton();
    return { addressField, cityField, stateField, zipcodeField, searchButton };
  }

  it('renders post office search form fields that are enabled', () => {
    const { addressField, cityField, stateField, zipcodeField, searchButton } = getFormElements();

    assert.equal(addressField.disabled, false);
    assert.equal(cityField.disabled, false);
    assert.equal(stateField.disabled, false);
    assert.equal(zipcodeField.disabled, false);

    assert.equal(addressField.disabled, false);
    assert.equal(cityField.disabled, false);
    assert.equal(stateField.disabled, false);
    assert.equal(zipcodeField.disabled, false);
    assert.equal(searchButton.disabled, false);
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
        assert.equal(addressField.value, testData.address);
        assert.equal(cityField.value, testData.city);
        assert.equal(stateField.value, testData.state);
        assert.equal(zipcodeField.value, testData.zipcode);
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
          assert(container.textContent!.includes(errorMessage));
          assert.equal(requiredErrorMessages.length, 4);
        });

        it('does not result in any fetch requests', () => {
          assert.equal(fetchMock!.mock.callCount(), 0);
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
          assert.notEqual(fetchMock!.mock.callCount(), 0);
        });
      });
    });
  });
});
