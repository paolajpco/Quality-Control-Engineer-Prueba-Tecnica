import home from '../pages/homePage';
import results from '../pages/resultsPage';
import passenger from '../pages/passengerPage';

describe('Search flight flow', () => {

  it('searches flights and fills passenger data', () => {

    cy.viewport(1280, 800);
    home.visit();

    // Fill search form
    home.setOrigin('Bogotá');
    home.setDestination('Cali');
    home.setDepartDate('2026-03-15');
    home.setReturnDate('2026-04-20');
    home.openPassengers();
    home.selectAdults(2);
    home.search();

    // Wait and select flight
    results.waitForResults();
    results.selectFirstResult();

    // Fill passenger data
    passenger.fillPassenger({
      sexo: 'Femenino',
      nombres: 'Test',
      apellidos: 'User',
      numero_documento: '12345678',
      fecha_nacimiento: '2000-01-01',
      nacionalidad: 'Colombiana',
      pais_residencia: 'Colombia'
    });

    passenger.continue();

    // Verify progression
    cy.url().should('match', /passenger|checkout|booking/i);
  });

});
