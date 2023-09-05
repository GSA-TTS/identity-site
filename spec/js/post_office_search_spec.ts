/**
 * @jest-environment jsdom
 */

import { getByLabelText, getByRole, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setImmediate } from 'timers/promises';

describe('Post Office Search', () => {
  // This is simulated since the test env doesn't support fetch
  const testServerPort = 9835;
  const addressSearchUrl = `http://127.0.0.1:${testServerPort}/api/address_search`;
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
      container.dataset.addressSearchUrl = addressSearchUrl;
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

  const getField = function () {
    return getByLabelText(
      document.body,
      'in_person_proofing.body.location.po_search.address_search_label',
    );
  };

  const getButton = function () {
    return getByRole(container, 'button', {
      name: 'in_person_proofing.body.location.po_search.search_button',
    });
  };

  it('renders a post office search component', () => {
    const field = getField();
    expect(field).toBeEnabled();
    expect(field).toBeVisible();
  });

  describe('when searching', () => {
    const testAddress = '1600 W Pennsylvania Ave, Washington, DC 20500';

    it('allows search field input', async () => {
      const field = getField();
      await act(async () => {
        await user.clear(field);
        await user.type(field, testAddress);
      });

      await waitFor(() => {
        expect(field).toHaveValue(testAddress);
      });
    });

    describe('submitting', () => {
      describe('invalid input', () => {
        beforeEach(async () => {
          const button = getButton();
          await act(async () => {
            await user.click(button);
          });
        });

        it('shows an error', () => {
          const errorMessage = 'in_person_proofing.body.location.inline_error';
          expect(container).toHaveTextContent(errorMessage);
        });

        it('does not result in any fetch requests', () => {
          expect(global.fetch).not.toHaveBeenCalled();
        });
      });

      describe('valid input with no results', () => {
        beforeEach(async () => {
          const field = getField();
          const button = getButton();
          await act(async () => {
            await user.clear(field);
            await user.type(field, testAddress);
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
