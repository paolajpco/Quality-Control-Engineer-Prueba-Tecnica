class PassengerPage {

  fillPassenger({
    sexo,
    nombres,
    apellidos,
    numero_documento,
    fecha_nacimiento,
    nacionalidad,
    pais_residencia
  }) {

    if (sexo) {
      cy.get('select[name*="gender"], [data-testid="gender"]')
        .first()
        .select(sexo);
    }

    if (nombres) {
      cy.get('input[name*="first"], input[name*="name"], [data-testid="first-name"]')
        .first()
        .clear()
        .type(nombres);
    }

    if (apellidos) {
      cy.get('input[name*="last"], input[name*="surname"], [data-testid="last-name"]')
        .first()
        .clear()
        .type(apellidos);
    }

    if (numero_documento) {
      cy.get('input[name*="document"], input[name*="doc"], [data-testid="document"]')
        .first()
        .clear()
        .type(numero_documento);
    }

    if (fecha_nacimiento) {
      cy.get('input[type="date"], [data-testid="birth-date"]')
        .first()
        .clear()
        .type(fecha_nacimiento);
    }

    if (nacionalidad) {
      cy.get('select[name*="nationality"], [data-testid="nationality"]')
        .first()
        .select(nacionalidad);
    }

    if (pais_residencia) {
      cy.get('[data-testid="residence-country"], select[name*=pais]')
        .first()
        .select(pais_residencia);
    }
  }

  continue() {
    cy.get('[data-testid="continue-button"], button[type="submit"], .continue')
      .first()
      .click();
  }
}

module.exports = new PassengerPage();