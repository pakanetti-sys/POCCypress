import cadastroUsuarioElements from "./cadastroUsuarioElements";

class CadastroUsuarioPage {

  acessarPagina() {
    cy.visit("https://demoqa.com/automation-practice-form");
  }

  preencherFirstName(nome) {
    cy.get(cadastroUsuarioElements.firstName).type(nome);
  }

  preencherLastName(sobrenome) {
    cy.get(cadastroUsuarioElements.lastName).type(sobrenome);
  }

  preencherEmail(email) {
    cy.get(cadastroUsuarioElements.email).type(email);
  }

  selecionarGenero(genero) {
    cy.contains("label", genero).click();
  }

  preencherTelefone(telefone) {
    cy.get(cadastroUsuarioElements.phone).type(telefone);
  }

  submeterFormulario() {
    cy.get(cadastroUsuarioElements.submitButton).click();
  }

  validarEnvio() {
    cy.get("#example-modal-sizes-title-lg")
      .should("contain", "Thanks for submitting the form");
  }
}

export default CadastroUsuarioPage;
