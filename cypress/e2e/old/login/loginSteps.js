import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./LoginPage";

const loginPage = new LoginPage();

// -------- ACESSAR SITE --------
Given('que acesso a página inicial do site', () => {
  loginPage.acessarSite();
});

// -------- LOGIN SUCESSO (Cenário 1) --------
When('preencho minhas credenciais válidas', () => {
  cy.fixture('login').then((credenciais) => {
    loginPage.fillLogin(credenciais.login);
    loginPage.fillPassword(credenciais.password);
  });
});

// -------- LOGIN SUCESSO (Outline) --------
When(
  'preencho minhas credenciais válidas {string} e a senha {string}',
  (login, senha) => {
    loginPage.fillLogin(login);
    loginPage.fillPassword(senha);
  }
);

When('confirmo o login', () => {
  loginPage.confirmLogin();
});

Then('devo visualizar a lista de produtos', () => {
  cy.url().should('include', '/inventory.html');
});

Then('o sistema deve apresentar {string}', (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});
