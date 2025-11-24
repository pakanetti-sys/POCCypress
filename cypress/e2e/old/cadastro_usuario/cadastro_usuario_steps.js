import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroUsuarioPage from "./CadastroUsuarioPage";

const cadastroPage = new CadastroUsuarioPage();

Given("que estou na página de cadastro de estudante", () => {
  cadastroPage.acessarPagina();
});

When("eu preencho o formulário com os dados:", (tabela) => {
  const dados = tabela.rowsHash();

  cadastroPage.preencherFirstName(dados.firstName);
  cadastroPage.preencherLastName(dados.lastName);
  cadastroPage.preencherEmail(dados.email);
  cadastroPage.selecionarGenero(dados.gender);
  cadastroPage.preencherTelefone(dados.phone);
});

Then("o formulário deve ser enviado com sucesso", () => {
  cadastroPage.submeterFormulario();
  cadastroPage.validarEnvio();
});
