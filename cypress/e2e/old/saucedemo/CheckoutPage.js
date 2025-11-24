import el from "../elements/5.1 CheckoutElements";

class CheckoutPage {

  preencherDados(nome, sobrenome, cep) {
    cy.get(el.inputNome()).clear().type(nome);
    cy.get(el.inputSobrenome()).clear().type(sobrenome);
    cy.get(el.inputCEP()).clear().type(cep);
    cy.get(el.botaoContinue()).click();
  }

  finalizarCompra() {
    cy.get(el.botaoFinish()).click();
  }

  validarMensagemSucesso(msg) {
    cy.get(el.mensagemSucesso()).should("contain.text", msg);
  }

  clicarContinuarSemDados() {
  cy.get('[data-test="continue"]').click();
}


}



export default CheckoutPage;
