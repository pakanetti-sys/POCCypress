import el from "./3.1 DetalheProdutoElements";

class DetalheProdutoPage {

  validarDetalhesProduto() {
    cy.get(el.nomeProduto()).should("be.visible");
    cy.get(el.precoProduto()).should("be.visible");
    cy.get(el.descricaoProduto()).should("be.visible");
  }
}

export default DetalheProdutoPage;
