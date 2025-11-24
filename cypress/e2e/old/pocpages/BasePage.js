class BasePage {

  log(mensagem) {
    cy.log(`📌 ${mensagem}`);
  }

  click(selector) {
    cy.get(selector).click();
  }

  type(selector, text) {
    cy.get(selector).type(text);
  }

  assertContains(texto) {
    cy.contains(texto).should('be.visible');
  }

}

export default BasePage;
