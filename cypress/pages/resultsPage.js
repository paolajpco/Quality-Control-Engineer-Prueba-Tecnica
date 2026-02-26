class ResultsPage {
  waitForResults() {
    cy.get('[data-testid="results-list"], .results, .flights-results').should('exist').and('not.be.empty');
  }

  selectFirstResult() {
    cy.get('[data-testid="results-list"] .result, .result-item, .flight-row')
      .first()
      .find('[data-testid="select-button"], button, .select-flight')
      .first()
      .click();
  }

  getPriceOfFirst() {
    return cy
      .get('[data-testid="results-list"] .result, .result-item, .flight-row')
      .first()
      .find('.price, .amount')
      .invoke('text');
  }
}

module.exports = new ResultsPage();
