import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";
import CarrinhoPage from "../../pages/CarrinhoPage";
import CheckoutPage from "../../pages/CheckoutPage";

const produtosPage = new ProdutosPage();
const carrinhoPage = new CarrinhoPage();
const checkoutPage = new CheckoutPage();

// Já herdamos o passo "que realizo login no sistema" da pasta common

Given('adiciono o primeiro produto ao carrinho', () => {
  produtosPage.adicionarPrimeiroProduto();
  cy.screenshot("checkout_produto_adicionado");
});

Given('acesso o carrinho para checkout', () => {
  produtosPage.acessarCarrinho();
  cy.screenshot("checkout_acessar_carrinho");
});

When('prossigo para o checkout', () => {
  carrinhoPage.clicarCheckout();
  cy.screenshot("checkout_inicio");
});

When('preencho meus dados de checkout', () => {
  checkoutPage.preencherDados("Alex", "Silva", "54000-000");
  cy.screenshot("checkout_dados_preenchidos");
});

When('confirmo o pedido', () => {
  checkoutPage.finalizarCompra();
  cy.screenshot("checkout_pedido_confirmado");
});

Then('devo visualizar a mensagem de sucesso {string}', (mensagem) => {
  checkoutPage.validarMensagemSucesso(mensagem);
  cy.screenshot("checkout_sucesso");
});
