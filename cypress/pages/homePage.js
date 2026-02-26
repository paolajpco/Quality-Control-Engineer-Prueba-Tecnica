class HomePage {
  visit() {
    cy.visit('https://www.wingo.com/');
  }

  setOrigin(text) {
    cy.get('[data-testid="origin-input"], input[name*=origin], input[placeholder*="Origen"], .origin-input')
      .first()
      .clear()
      .type(text);
  }

  setDestination(text) {
    cy.get('[data-testid="destination-input"], input[name*=destination], input[placeholder*="Destino"], .destination-input')
      .first()
      .clear()
      .type(text);
  }

  setDepartDate(date) {
    cy.get('input[name*=depart], input[name*=start], input[type="date"]').first().clear().type(date);
  }

  setReturnDate(date) {
    cy.get('input[name*=return], input[name*=end], input[type="date"]').last().clear().type(date);
  }

  openPassengers() {
    cy.get('[data-testid="passengers-toggle"], .passenger-toggle, .passengers').first().click();
  }

  selectAdults(n) {
    if (n <= 1) return;
    const increase = '[data-testid="increase-adult"], .adult-increase, .plus-adult';
    for (let i = 1; i < n; i++) {
      cy.get(increase).first().click();
    }
  }

  search() {
    cy.get('[data-testid="search-button"], button[type=submit], .search-button').first().click();
  }
}

module.exports = new HomePage();
