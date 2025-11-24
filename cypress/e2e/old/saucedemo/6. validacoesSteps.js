import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import CarrinhoPage from "../../pages/CarrinhoPage";

const loginPage = new LoginPage();
const carrinhoPage = new CarrinhoPage();

/* LOGIN INVÁLIDO */
When(
  'tento realizar login com usuario {string} e senha {string}',
  (usuario, senha) => {
    loginPage.fillLogin(usuario);
    loginPage.fillPassword(senha);
    loginPage.confirmLogin();
    cy.screenshot("validacao_login_invalido");
  }
);

Then('devo visualizar a mensagem de erro de login {string}', (mensagem) => {
  cy.contains('[data-test="error"]', mensagem).should('be.visible');
  cy.screenshot("validacao_erro_login");
});

/* CHECKOUT SEM PRODUTO */
When('acesso o carrinho para validações', () => {
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.screenshot("validacao_acesso_carrinho");
});

When('tento prosseguir para o checkout', () => {
  carrinhoPage.clicarCheckout();
  cy.screenshot("validacao_tentativa_checkout");
});

Then('devo ser encaminhado para a página de checkout', () => {
  cy.url().should('include', '/checkout-step-one.html');
});

/* CAMPOS OBRIGATÓRIOS DO CHECKOUT */
When('tento prosseguir com o checkout sem preencher os dados', () => {
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="continue"]').click();
  cy.screenshot("validacao_checkout_campos_vazios");
});

Then('devo visualizar a mensagem de erro no checkout {string}', (mensagem) => {
  cy.contains('[data-test="error"]', mensagem).should('be.visible');
  cy.screenshot("validacao_erro_checkout");
});
