import CadastroAlunoElements from "../elements/CadastroAlunoElements";

class CadastroAlunoPage {
  constructor() {
    this.el = new CadastroAlunoElements();
  }

  // Função para normalizar dias (remove zero à esquerda)
  normalizarDia(dia) {
    return parseInt(dia, 10).toString();
  }

  // -------------------------
  // ACESSAR FORMULÁRIO
  // -------------------------
  acessarFormulario() {
    cy.visit("https://www.jotform.com/form/253263543176660");
    cy.wait(1500);
  }

  // -------------------------
  // CAMPOS DO ALUNO
  // -------------------------
  preencherNomeAluno(nome) {
    cy.get(this.el.nomeAluno()).clear().type(nome);
  }

  preencherSobrenomeAluno(sobrenome) {
    cy.get(this.el.sobrenomeAluno()).clear().type(sobrenome);
  }

  preencherDataReferencia(dia, mes, ano) {
    cy.get(this.el.dataReferenciaDia()).select(this.normalizarDia(dia));
    cy.get(this.el.dataReferenciaMes()).select(mes);
    cy.get(this.el.dataReferenciaAno()).select(ano);
  }

  selecionarSerie(serie) {
    cy.get(this.el.serie()).clear().type(serie);
  }

  // -------------------------
  // RESPONSÁVEIS
  // -------------------------
  preencherNomeMae(nome) {
    cy.get(this.el.nomeMae()).clear().type(nome);
  }

  preencherSobrenomeMae(sobrenome) {
    cy.get(this.el.sobrenomeMae()).clear().type(sobrenome);
  }

  preencherNomePai(nome) {
    cy.get(this.el.nomePai()).clear().type(nome);
  }

  preencherSobrenomePai(sobrenome) {
    cy.get(this.el.sobrenomePai()).clear().type(sobrenome);
  }

  // -------------------------
  // TELEFONES
  // -------------------------
  preencherTelefoneResidencial(ddd, numero) {
    cy.get(this.el.telResDdd()).clear().type(ddd);
    cy.get(this.el.telResNum()).clear().type(numero);
  }

  preencherTelefoneCelular(ddd, numero) {
    cy.get(this.el.telCelDdd()).clear().type(ddd);
    cy.get(this.el.telCelNum()).clear().type(numero);
  }

  preencherTelefoneProfissional(ddd, numero) {
    cy.get(this.el.telProfDdd()).clear().type(ddd);
    cy.get(this.el.telProfNum()).clear().type(numero);
  }

  // -------------------------
  // ENDEREÇO
  // -------------------------
  preencherEndereco(valor) {
    cy.get(this.el.endereco()).clear().type(valor);
  }

  preencherBairro(valor) {
    cy.get(this.el.bairro()).clear().type(valor);
  }

  preencherCidade(valor) {
    cy.get(this.el.cidade()).clear().type(valor);
  }

  preencherEstado(valor) {
    cy.get(this.el.estado()).clear().type(valor);
  }

  preencherCEP(valor) {
    cy.get(this.el.cep()).clear().type(valor);
  }

  selecionarPais(valor) {
    cy.get(this.el.pais()).select(valor);
  }

  // -------------------------
  // ÁREA ACADÊMICA (DINÂMICO)
  // -------------------------
  selecionarAreaAcademica(mat, leitura, outro) {
    const matFlag = mat === "true";
    const leituraFlag = leitura === "true";
    const outroFlag = outro === "true";

    if (matFlag) {
      cy.contains("label", "Matemática")
        .invoke("attr", "for")
        .then((id) => cy.get(`#${id}`).check({ force: true }));
    }

    if (leituraFlag) {
      cy.contains("label", "Leitura")
        .invoke("attr", "for")
        .then((id) => cy.get(`#${id}`).check({ force: true }));
    }

    if (outroFlag) {
      cy.contains("label", "Outro")
        .invoke("attr", "for")
        .then((id) => cy.get(`#${id}`).check({ force: true }));
    }
  }

  // ---------------------------------------
  // COMPORTAMENTO
  // ---------------------------------------
  selecionarComportamento(valor) {
    if (valor === "Sim") {
      cy.get(this.el.comportamento())
        .should("exist")
        .check({ force: true });
    } else {
      cy.get(this.el.comportamento())
        .should("exist")
        .uncheck({ force: true });
    }
  }

  // -------------------------
  // PRESENÇA
  // -------------------------
  preencherDiasPresenca(valor) {
    cy.get(this.el.diasPresentes()).clear().type(valor);
  }

  preencherDiasAusencia(valor) {
    cy.get(this.el.diasAusentes()).clear().type(valor);
  }

  // -------------------------
  // ESCOLAS ANTERIORES
  // -------------------------
  preencherEscolasAnteriores(texto) {
    cy.get(this.el.escolasAnteriores()).clear().type(texto);
  }

  // -------------------------
  // NOTAS INICIAIS
  // -------------------------
  preencherNotaMatematica(nota) {
    cy.get(this.el.notaMatematica()).clear().type(nota);
  }

  preencherNotaPortugues(nota) {
    cy.get(this.el.notaPortugues()).clear().type(nota);
  }

  // -------------------------
  // TRIAGEM
  // -------------------------
  preencherDataTriagem(mes, dia, ano) {
    cy.get(this.el.triagemMes()).select(mes);
    cy.get(this.el.triagemDia()).select(this.normalizarDia(dia));
    cy.get(this.el.triagemAno()).select(ano);
  }

  preencherResultadoTriagem(valor) {
    cy.get(this.el.resultadoTriagem()).clear().type(valor);
  }

  selecionarReavaliacao(opcao) {
    if (opcao === "Sim") {
      cy.get(this.el.reavaliacaoSim()).check({ force: true });
    } else {
      cy.get(this.el.reavaliacaoNao()).check({ force: true });
    }
  }

  // -------------------------
  // NASCIMENTO
  // -------------------------
  preencherDataNascimento(mes, dia, ano) {
    cy.get(this.el.nascMes()).select(mes);
    cy.get(this.el.nascDia()).select(this.normalizarDia(dia));
    cy.get(this.el.nascAno()).select(ano);
  }

  // -------------------------
  // VISÃO
  // -------------------------
  preencherDataVisao(mes, dia, ano) {
    cy.get(this.el.visaoMes()).select(mes);
    cy.get(this.el.visaoDia()).select(this.normalizarDia(dia));
    cy.get(this.el.visaoAno()).select(ano);
  }

  preencherResultadoVisao(valor) {
    cy.get(this.el.resultadoVisao()).clear().type(valor);
  }

  selecionarRechecagemVisao(valor) {
    if (valor === "Sim") {
      cy.get(this.el.rechecagemVisaoSim()).check({ force: true });
    } else {
      cy.get(this.el.rechecagemVisaoNao()).check({ force: true });
    }
  }

  // -------------------------
  // NECESSIDADES ESPECIAIS
  // -------------------------
  preencherNecessidadesEspeciais(texto) {
    cy.get(this.el.necessidadesEspeciais()).clear().type(texto);
  }

  // -------------------------
  // DISCIPLINA
  // -------------------------
  preencherRelatoriosDisciplina(valor) {
    cy.get(this.el.relatoriosDisciplina()).clear().type(valor);
  }

  preencherSuspensoes(valor) {
    cy.get(this.el.suspensoes()).clear().type(valor);
  }

  preencherSuspensoesEscola(valor) {
    cy.get(this.el.suspensoesEscola()).clear().type(valor);
  }

  preencherSuspensoesFora(valor) {
    cy.get(this.el.suspensoesFora()).clear().type(valor);
  }

  // -------------------------
  // NOTAS FINAIS
  // -------------------------

  preencherNotaPortuguesFinal(nota) {
    cy.get(this.el.notaPortuguesFinal()).clear().type(nota);
  } 

  preencherNotaLeituraFinal(nota) {
    cy.get(this.el.notaLeituraFinal()).clear().type(nota);
  }

  preencherNotaMatematicaFinal(nota) {
    cy.get(this.el.notaMatematicaFinal()).clear().type(nota);
  }

  preencherNotaCiencias(nota) {
    cy.get(this.el.notaCiencias()).clear().type(nota);
  }

  preencherNotaSociais(nota) {
    cy.get(this.el.notaSociais()).clear().type(nota);
  }

  preencherNotaEdFisica(nota) {
    cy.get(this.el.notaEdFisica()).clear().type(nota);
  }

  preencherNotaOutro(nota) {
    cy.get(this.el.notaOutroFinal()).clear().type(nota);
  }

  // -------------------------
  // RETENÇÃO
  // -------------------------
  preencherAnoRetencao(valor) {
    cy.get(this.el.retencaoAno()).clear().type(valor);
  }

  preencherNotasRetencao(valor) {
    cy.get(this.el.retencaoNotas()).clear().type(valor);
  }

  preencherEscolaAnterior(texto) {
    cy.get(this.el.retencaoEscolaAnterior()).clear().type(texto);
  }

  // -------------------------
  // ENVIO
  // -------------------------
  enviarFormulario() {
    cy.get(this.el.botaoEnviar()).click();
    cy.wait(1500);
  }

  // -------------------------
  // VALIDAÇÃO
  // -------------------------
  validarMensagemSucesso(mensagem) {
    cy.get(this.el.mensagemSucesso())
      .should("be.visible")
      .contains(mensagem);
  }
}

export default CadastroAlunoPage;
