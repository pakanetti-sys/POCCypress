import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";
import CarrinhoPage from "../../pages/CarrinhoPage";

const produtosPage = new ProdutosPage();
const carrinhoPage = new CarrinhoPage();

// Herdado: "que realizo login no sistema"

When('adiciono o produto {string} ao carrinho', (produto) => {
  produtosPage.adicionarProdutoPorNome(produto);
  cy.screenshot("carrinho_produto_adicionado");
});

When('acesso o carrinho', () => {
  produtosPage.acessarCarrinho();
  cy.screenshot("carrinho_acesso");
});

Then('o carrinho deve exibir o produto {string}', (produto) => {
  carrinhoPage.validarProdutoNoCarrinho(produto);
  cy.screenshot("carrinho_validacao_produto");
});
