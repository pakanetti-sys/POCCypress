import el from "../elements/4.1 CarrinhoElements";

class CarrinhoPage {

validarProdutoNoCarrinho(nomeProduto) {
  cy.contains('.cart_item', nomeProduto).should('be.visible');
}

  clicarCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default CarrinhoPage;
