import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";
import DetalheProdutoPage from "../../pages/DetalheProdutoPage";

const produtosPage = new ProdutosPage();
const detalhePage = new DetalheProdutoPage();

When('seleciono o produto {string}', (produto) => {
  produtosPage.clicarProdutoPorNome(produto);

});

Then('os detalhes do produto devem ser exibidos corretamente', () => {
  detalhePage.validarDetalhesProduto();

  // Evidência na página de detalhes
  cy.screenshot("detalhes_do_produto_exibidos");
});
