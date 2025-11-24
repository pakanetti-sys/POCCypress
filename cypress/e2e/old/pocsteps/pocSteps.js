import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PocPage from "../../pages/PocPage";

const poc = new PocPage();

Given("que inicio a POC de testes", () => {
  poc.iniciarPoc();
});

When("executo uma ação de exemplo", () => {
  poc.executarAcao();
});

Then("a integração entre as camadas deve funcionar", () => {
  poc.validarIntegracao();
});
