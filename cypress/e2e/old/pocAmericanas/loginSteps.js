import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "./LoginPage";

const loginPage = new LoginPage();

// -------- CONTEXTO --------
Given('que acesso a página de login da Americanas', () => {
  loginPage.acessarSite();
  loginPage.clicarEntrarEmailSenha();
});

// -------- LOGIN SUCESSO --------
When('preencho minhas credenciais válidas', () => {
  cy.fixture('login').then((credenciais) => {
    loginPage.preencherEmail(credenciais.email_valido);
    loginPage.preencherSenha(credenciais.senha_valida);
  });
});

When('confirmo o login', () => {
  loginPage.confirmarLogin();
});

Then('devo ser autenticado com sucesso', () => {
  cy.url().should('include', '/minha-conta'); // ajuste depois conforme o sistema real
});

// -------- LOGIN INVÁLIDO --------
When('preencho credenciais inválidas', () => {
  cy.fixture('login').then((credenciais) => {
    loginPage.preencherEmail(credenciais.email_invalido);
    loginPage.preencherSenha(credenciais.senha_invalida);
  });
});

Then('devo visualizar uma mensagem de erro de autenticação', () => {
  cy.contains('Credenciais inválidas').should('be.visible');
});

// -------- LOGIN COM EXEMPLOS --------
When('preencho o email {string} e a senha {string}', (email, senha) => {
  loginPage.preencherEmail(email);
  loginPage.preencherSenha(senha);
});

Then('o sistema deve apresentar {string}', (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});
