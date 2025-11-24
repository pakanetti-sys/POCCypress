class DetalheProdutoPage {
  validarDetalhesProduto() {
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
    cy.get('.inventory_details_desc').should('be.visible');

    
  }
}

export default DetalheProdutoPage;
