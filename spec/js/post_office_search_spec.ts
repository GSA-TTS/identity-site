/**
 * @jest-environment jsdom
 */

import { getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { act } from '@testing-library/react';

describe('Post Office Search', () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    act(() => {
      container = document.createElement('div');
      container.id = 'post-office-search';
      document.body.appendChild(container);
      jest.isolateModules(() => {
        // eslint-disable-next-line global-require
        require('../../assets/js/post_office_search');
      });
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

  it('renders a post office search component', () => {
    act(() => {
      const field = getField();
      expect(field).toBeEnabled();
      expect(field).toBeVisible();
    });
  });

  it('allows a text search', () => {
    act(() => {
      const field = getField();
      expect(field).toBeEnabled();
      expect(field).toBeVisible();
    });
  });
});
