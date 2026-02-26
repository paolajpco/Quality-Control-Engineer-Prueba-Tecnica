class PassengerPage {
  fillPassenger({ firstName, lastName, doc }) {
    if (firstName) cy.get('[data-testid="first-name"], input[name*=first], input[placeholder*="Nombre"]').first().clear().type(firstName);
    if (lastName) cy.get('[data-testid="last-name"], input[name*=last], input[placeholder*="Apellido"]').first().clear().type(lastName);
    if (doc) cy.get('[data-testid="document"], input[name*=doc], input[placeholder*="Documento"]').first().clear().type(doc);
  }

  continue() {
    cy.get('[data-testid="continue-button"], button[type=submit], .continue').first().click();
  }
}

module.exports = new PassengerPage();
