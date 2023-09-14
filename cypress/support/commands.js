// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('NavigateToHomepage', () => {
    // cy.viewport('iphone-se2');
     cy.visit('https://www.circlehealthgroup.co.uk/');
     cy.wait(1000)
     cy.get('a.PrimaryNavigation__logo').should('be.visible');
    // cy.wait(2000)
     cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })