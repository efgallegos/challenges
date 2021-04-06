// Cypress custom commands
Cypress.Commands.add('interceptConsent', (buttonSelector) => {
  cy.intercept('https://api.privacy-center.org/v1/events').as('events-api');
  cy.get(buttonSelector).first().click();
  cy.wait('@events-api')
    .its('request.body.type')
    .should('eq', 'consent.given');
});

Cypress.Commands.add('getUserStatus', () => {
  cy.window().then((win) => {
    const userStatus = win.Didomi.getUserStatus();
    return userStatus;
  });
});
