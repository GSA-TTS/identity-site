/**
 * @jest-environment jsdom
 */

describe('NoInPersonLocationsDisplay', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <no-in-person-locations-display
        address="Somewhere over the rainbow"
      ></no-in-person-locations-display>
    `;
  });

  it('renders h2 status text', async () => {
    const noInPersonLocationsDisplay = document.querySelector('no-in-person-locations-display')!;

    expect(noInPersonLocationsDisplay.hasAttribute('status'));
    expect(noInPersonLocationsDisplay.hasAttribute('h2'));
  });
});
