import BasePage from "./BasePage";

class LoginPage extends BasePage {

  acessarSite() {
    cy.visit("https://www.saucedemo.com/");
  }

  preencherUsuario(usuario) {
    this.type("#user-name", usuario);
  }

  preencherSenha(senha) {
    this.type("#password", senha);
  }

  clicarLogin() {
    this.click("#login-button");
  }

  validarLogin() {
    this.assertContains("Products"); // título da página
  }
}

export default LoginPage;
