class PassengerPage {
  fillPassenger({
    sexo,
    nombres,
    primer_apellido,
    segundo_apellido,
    numero_documento,
    fecha_nacimiento,
    nacionalidad
  }) {
    // Seleccionar el sexo (si aplica)
    if (sexo) {
      cy.get('select[name*="gender"], [data-testid="gender"]').first()
        .select(sexo);
    }

    // Nombres
    if (nombres) {
      cy.get('input[name*="first"], input[name*="name"], [data-testid="first-name"]')
        .first().clear().type(nombres);
    }

    // Primer apellido
    if (primer_apellido) {
      cy.get('input[name*="last"], input[name*="surname"], [data-testid="last-name"]')
        .first().clear().type(primer_apellido);
    }

    // Segundo apellido
    if (segundo_apellido) {
      cy.get('input[name*="second"], [data-testid="second-last-name"]')
        .first().clear().type(segundo_apellido);
    }

    // Número de documento o pasaporte
    if (numero_documento) {
      cy.get('input[name*="document"], input[name*="doc"], [data-testid="document"]')
        .first().clear().type(numero_documento);
    }

    // Fecha de nacimiento
    if (fecha_nacimiento) {
      cy.get('input[type="date"], [data-testid="birth-date"]')
        .first().clear().type(fecha_nacimiento);
    }

    // Nacionalidad
    if (nacionalidad) {
      cy.get('select[name*="nationality"], [data-testid="nationality"]')
        .first().select(nacionalidad);
    }
  }

  continue() {
    cy.get('[data-testid="continue-button"], button[type="submit"], .continue')
      .first().click();
  }
}

module.exports = new PassengerPage();
