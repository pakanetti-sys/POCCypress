import el from './LoginElements';

class LoginPage {

  acessarSite() {
    cy.visit('https://www.americanas.com.br/login');
  }

  clicarEntrarEmailSenha() {
    cy.contains('button', 'Entrar com email e senha', { timeout: 15000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });
  }

  preencherEmail(email) {
    cy.get(el.campoEmail(), { timeout: 10000 })
      .should('be.visible')
      .type(email);
  }

  preencherSenha(senha) {
    cy.get(el.campoSenha(), { timeout: 10000 })
      .should('be.visible')
      .type(senha);
  }

  confirmarLogin() {
    cy.get(el.botaoConfirmar(), { timeout: 10000 })
      .should('be.visible')
      .click();
  }
}

export default LoginPage;
