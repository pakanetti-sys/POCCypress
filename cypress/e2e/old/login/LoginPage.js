import el from './LoginElements';

class LoginPage {

  acessarSite() {
    cy.visit('https://www.saucedemo.com/');
  }

  fillLogin(username) {
    cy.get(el.campoLogin()).should('be.visible').type(username);
  }

  fillPassword(password) {
    cy.get(el.campoSenha()).should('be.visible').type(password);
  }

  confirmLogin() {
    cy.get(el.botaoConfirmar()).click();
  }

}

export default LoginPage;
