import el from "../elements/2.1 ProdutosElements";

class ProdutosPage {

  validarPaginaProdutos() {
    cy.url().should("include", "/inventory.html");
    cy.get(el.produtoItem()).should("have.length.greaterThan", 0);
  }

  validarListaProdutos() {
    cy.get(el.produtoItem()).should("have.length.greaterThan", 0);
  }

  buscarProdutoPorNome(nomeProduto) {
    cy.get(el.produtoItemNome())
      .contains(nomeProduto)
      .should("be.visible");

    }

  validarProdutoExiste(nomeProduto) {
    cy.get(el.produtoItemNome())
      .contains(nomeProduto)
      .should("be.visible");

    cy.screenshot(`validacao_produto_existe_${nomeProduto}`);
  }

  clicarPrimeiroProduto() {
    cy.get(el.produtoItem()).first().click();
  }

  clicarProdutoPorNome(nomeProduto) {
    cy.get(el.produtoItemNome())
      .contains(nomeProduto)
      .should("be.visible")
      .click();

  }

adicionarProdutoPorNome(nomeProduto) {
  cy.contains('.inventory_item', nomeProduto)
    .find('button')
    .click();
}

acessarCarrinho() {
  cy.get('[data-test="shopping-cart-link"]').click();
}

}

export default ProdutosPage;
