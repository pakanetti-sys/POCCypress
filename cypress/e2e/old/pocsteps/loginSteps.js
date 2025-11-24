import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../pages/LoginPage";

const login = new LoginPage();

Given("que acesso o site SauceDemo", () => {
  login.acessarSite();
});

When("faço login com usuário {string} e senha {string}", (usuario, senha) => {
  login.preencherUsuario(usuario);
  login.preencherSenha(senha);
  login.clicarLogin();
});

Then("devo visualizar a lista de produtos", () => {
  login.validarLogin();
});
