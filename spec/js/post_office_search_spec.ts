/**
 * @jest-environment jsdom
 */

import { getByLabelText, getByRole, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { promisify } from 'util';

const wait = promisify(setImmediate);

describe('Post Office Search', () => {
  let container: HTMLDivElement;
  let user: UserEvent;
  beforeEach(async () => {
    user = userEvent.setup();
    await act(async () => {
      container = document.createElement('div');
      container.id = 'post-office-search';
      container.dataset.addressSearchUrl = 'http://localhost:4000/api/address_search';
      container.dataset.locationsSearchUrl = 'http://localhost:4000/api/usps_locations';
      document.body.appendChild(container);
      jest.isolateModules(() => {
        // eslint-disable-next-line global-require
        require('../../assets/js/post_office_search');
      });
      await wait();
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

  it('renders a post office search component', async () => {
    await act(async () => {
      const field = getField();
      expect(field).toBeEnabled();
      expect(field).toBeVisible();
      await wait();
    });
  });

  describe('when searching', () => {
    const testAddress = '1600 W Pennsylvania Ave, Washington, DC 20500';

    it('allows search field input', async () => {
      const field = getField();
      await act(async () => {
        user.clear(field);
        user.type(field, testAddress);
        await wait();
      });

      await waitFor(
        () => {
          expect(field).toHaveValue(testAddress);
        },
        { timeout: 3000, interval: 50 },
      );
    });

    describe('invalid input', () => {
      it('shows an error', async () => {
        const button = getButton();
        const errorMessage = 'in_person_proofing.body.location.inline_error';
        await act(async () => {
          user.click(button);
          await wait();
        });
        expect(container).toHaveTextContent(errorMessage);
      });
    });
  });
});
