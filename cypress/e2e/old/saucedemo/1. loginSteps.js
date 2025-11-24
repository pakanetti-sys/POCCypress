// cypress/support/step_definitions/1.loginSteps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given('que acesso a página inicial do sistema', () => {
  loginPage.acessarSite();
});

When('preencho minhas credenciais válidas', () => {
  cy.fixture('login').then(({ usuarioValido }) => {
    loginPage.fillLogin(usuarioValido.login);
    loginPage.fillPassword(usuarioValido.senha);
  });
});

When('preencho o login {string} e a senha {string}', (login, senha) => {
  loginPage.fillLogin(login);
  loginPage.fillPassword(senha);
});

When('confirmo o login', () => {
  loginPage.confirmLogin();
});

Then('devo visualizar a lista de produtos', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.inventory_item').should('have.length.greaterThan', 0);
});

Then('devo visualizar {string}', (mensagem) => {
  cy.get('.title').should('have.text', mensagem);
});
