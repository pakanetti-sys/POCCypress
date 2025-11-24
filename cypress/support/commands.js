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
//import LoginPage from "../pages/LoginPage";

//Cypress.Commands.add("loginSauce", (user, password) => {
  //const loginPage = new LoginPage();

  //loginPage.acessarSite();

  //loginPage.fillLogin(user);
  //loginPage.fillPassword(password);

  //loginPage.confirmLogin();

  // Validação opcional – se quiser, pode remover
  //cy.url().should("include", "/inventory.html");
//});
Cypress.Commands.add("stepScreenshot", (name) => {
  cy.screenshot(name);
});


