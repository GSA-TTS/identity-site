/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoInPersonLocationsDisplay from '../../assets/js/no_in_person_locations_display';

describe('NoInPersonLocationsDisplay', () => {
  test('should display an h2 message', async () => {
    const { container, getByRole } = await render(
      <NoInPersonLocationsDisplay address="123 Somewhere" />,
    );
    const heading = container.querySelector('h2');

    expect(heading).toHaveTextContent(/none_found/);
    expect(getByRole('status')).toBeInTheDocument();
  });
});
