import el from "../elements/1.1 LoginElements";

class LoginPage {

  acessarSite() {
    cy.visit("https://www.saucedemo.com/");
  }

  fillLogin(login) {
    cy.get(el.campoLogin()).should("be.visible").clear().type(login);
  }

  fillPassword(senha) {
    cy.get(el.campoSenha()).should("be.visible").clear().type(senha);
  }

  confirmLogin() {
    cy.get(el.botaoLogin()).should("be.visible").click();
  }
  
  validarMensagemErro(texto) {
  cy.contains('[data-test="error"]', texto).should("be.visible");
}

}

export default LoginPage;
