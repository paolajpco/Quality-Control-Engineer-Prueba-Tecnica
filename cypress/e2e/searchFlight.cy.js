import home from '../pages/homePage';
import results from '../pages/resultsPage';
import passenger from '../pages/passengerPage';

describe('Search flight flow', () => {
  it('searches flights and fills passenger data', () => {
    cy.viewport(1280, 800);
    home.visit();

    // fill search form
    home.setOrigin('Bogotá');
    home.setDestination('Cali');
    home.setDepartDate('2026-03-15');
    home.setReturnDate('2026-04-20');
    home.openPassengers();
    home.selectAdults(2);
    home.search();

    // wait and select
    results.waitForResults();
    results.selectFirstResult();

    // fill passenger and continue
    passenger.fillPassenger({ firstName: 'Test', lastName: 'User', doc: '12345678' });
    passenger.continue();

    // verify we progressed to a passenger/checkout page
    cy.url().should('match', /passenger|checkout|booking/i);
  });
});
