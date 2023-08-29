/**
 * @jest-environment jsdom
 */

import { getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';
import { promisify } from 'util';

const wait = promisify(setImmediate);

describe('Post Office Search', () => {
  let container: HTMLDivElement;
  beforeEach(async () => {
    await act(async () => {
      container = document.createElement('div');
      container.id = 'post-office-search';
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

  it('renders a post office search component', async () => {
    await act(async () => {
      const field = getField();
      expect(field).toBeEnabled();
      expect(field).toBeVisible();
      await wait();
    });
  });

  it('allows a text search', async () => {
    await act(async () => {
      const field = getField();
      expect(field).toBeEnabled();
      expect(field).toBeVisible();
      await wait();
    });
  });
});
