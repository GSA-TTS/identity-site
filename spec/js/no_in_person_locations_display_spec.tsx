import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { render } from '@testing-library/react';
import NoInPersonLocationsDisplay from '../../assets/js/no_in_person_locations_display';

describe('NoInPersonLocationsDisplay', () => {
  test('should display an h2 message', async () => {
    const { container, getByRole } = await render(
      <NoInPersonLocationsDisplay address="123 Somewhere" />,
    );
    const heading = container.querySelector('h2')!;

    assert.match(heading.textContent!, /none_found/);
    assert(getByRole('status'));
  });
});
