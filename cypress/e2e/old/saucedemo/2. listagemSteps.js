import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../pages/ProdutosPage";

const produtosPage = new ProdutosPage();

When('verifico a existência do produto {string}', (nomeProduto) => {
  produtosPage.buscarProdutoPorNome(nomeProduto);
});

Then('o produto {string} deve ser exibido na lista', (nomeProduto) => {
  produtosPage.validarProdutoExiste(nomeProduto);
});
