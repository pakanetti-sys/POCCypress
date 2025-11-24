import BasePage from "./BasePage";

class PocPage extends BasePage {

  iniciarPoc() {
    this.log("Iniciando POC...");
  }

  executarAcao() {
    this.log("Executando ação de exemplo...");
  }

  validarIntegracao() {
    this.log("POC OK - Cucumber + Steps + Page Object funcionando!");
  }

}

export default PocPage;
