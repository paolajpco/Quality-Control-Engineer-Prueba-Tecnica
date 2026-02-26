class PassengerPage {

  fillPassenger(passengerData, index = 0) {

    cy.get('[data-testid="passenger-form"]')
      .eq(index)
      .within(() => {

        if (passengerData.sexo)
          cy.get('select[name*="gender"]').select(passengerData.sexo);

        if (passengerData.nombres)
          cy.get('input[name*="first"]').clear().type(passengerData.nombres);

        if (passengerData.apellidos)
          cy.get('input[name*="last"]').clear().type(passengerData.apellidos);

        if (passengerData.numero_documento)
          cy.get('input[name*="doc"]').clear().type(passengerData.numero_documento);

        if (passengerData.fecha_nacimiento)
          cy.get('input[type="date"]').clear().type(passengerData.fecha_nacimiento);

        if (passengerData.nacionalidad)
          cy.get('select[name*="nationality"]').select(passengerData.nacionalidad);

        if (passengerData.pais_residencia)
          cy.get('select[name*="pais"]').select(passengerData.pais_residencia);

      });
  }

  continue() {
    cy.get('[data-testid="continue-button"], button[type="submit"]')
      .first()
      .click();
  }
}

module.exports = new PassengerPage();