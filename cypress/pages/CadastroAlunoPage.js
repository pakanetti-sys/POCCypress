class CadastroAlunoPage {
  acessarFormulario() {
    cy.visit("https://www.jotform.com/form/253263543176660");
    cy.get("form").should("be.visible");
  }

  // ---------------------------------------------
  // ALUNO
  // ---------------------------------------------
  preencherNomeAluno(nome) {
    cy.get("#first_3").clear().type(nome);
  }

  preencherSobrenomeAluno(sobrenome) {
    cy.get("#last_3").clear().type(sobrenome);
  }

  // ---------------------------------------------
  // DATA DE REFERÊNCIA
  // ---------------------------------------------
  preencherDataReferencia(dia, mes, ano) {
    cy.get("#input_4_day").select(dia);
    cy.get("#input_4_month").select(mes);
    cy.get("#input_4_year").select(ano);
  }

  selecionarSerie(serie) {
    cy.get("#input_5").select(serie);
  }

  // ---------------------------------------------
  // RESPONSÁVEIS
  // ---------------------------------------------
  preencherNomeMae(nome) {
    cy.get("#first_6").clear().type(nome);
  }

  preencherSobrenomeMae(sobrenome) {
    cy.get("#last_6").clear().type(sobrenome);
  }

  preencherNomePai(nome) {
    cy.get("#first_7").clear().type(nome);
  }

  preencherSobrenomePai(sobrenome) {
    cy.get("#last_7").clear().type(sobrenome);
  }

  // ---------------------------------------------
  // TELEFONES
  // ---------------------------------------------
  preencherTelefoneResidencial(ddd, numero) {
    cy.get("#input_8_area").clear().type(ddd);
    cy.get("#input_8_phone").clear().type(numero);
  }

  preencherTelefoneCelular(ddd, numero) {
    cy.get("#input_9_area").clear().type(ddd);
    cy.get("#input_9_phone").clear().type(numero);
  }

  preencherTelefoneProfissional(ddd, numero) {
    cy.get("#input_10_area").clear().type(ddd);
    cy.get("#input_10_phone").clear().type(numero);
  }

  // ---------------------------------------------
  // ENDEREÇO
  // ---------------------------------------------
  preencherEndereco(valor) {
    cy.get("#input_11_addr_line1").clear().type(valor);
  }

  preencherBairro(valor) {
    cy.get("#input_11_addr_line2").clear().type(valor);
  }

  preencherCidade(valor) {
    cy.get("#input_11_city").clear().type(valor);
  }

  preencherEstado(valor) {
    cy.get("#input_11_state").clear().type(valor);
  }

  preencherCEP(valor) {
    cy.get("#input_11_postal").clear().type(valor);
  }

  selecionarPais(valor) {
    cy.get("#input_11_country").select(valor);
  }

  // ---------------------------------------------
  // ÁREA ACADÊMICA
  // ---------------------------------------------
  selecionarAreaAcademica(mat, leitura, outro) {
    if (mat === "Sim") cy.get("#input_12_0").check({ force: true });
    if (leitura === "Sim") cy.get("#input_12_1").check({ force: true });
    if (outro === "Sim") cy.get("#input_12_2").check({ force: true });
  }

  // ---------------------------------------------
  // COMPORTAMENTO
  // ---------------------------------------------
  selecionarComportamento(valor) {
    cy.get("#input_13").select(valor);
  }

  // ---------------------------------------------
  // PRESENÇA
  // ---------------------------------------------
  preencherDiasPresenca(valor) {
    cy.get("#input_14").clear().type(valor);
  }

  preencherDiasAusencia(valor) {
    cy.get("#input_15").clear().type(valor);
  }

  // ---------------------------------------------
  // ESCOLAS ANTERIORES
  // ---------------------------------------------
  preencherEscolasAnteriores(texto) {
    cy.get("#input_16").clear().type(texto);
  }

  // ---------------------------------------------
  // PROVAS
  // ---------------------------------------------
  preencherNotaMatematica(valor) {
    cy.get("#input_17").clear().type(valor);
  }

  preencherNotaPortugues(valor) {
    cy.get("#input_18").clear().type(valor);
  }

  // ---------------------------------------------
  // TRIAGEM
  // ---------------------------------------------
  preencherDataTriagem(mes, dia, ano) {
    cy.get("#input_19_month").select(mes);
    cy.get("#input_19_day").select(dia);
    cy.get("#input_19_year").select(ano);
  }

  preencherResultadoTriagem(valor) {
    cy.get("#input_20").clear().type(valor);
  }

  selecionarReavaliacao(valor) {
    valor === "Sim"
      ? cy.get("#input_21_0").check({ force: true })
      : cy.get("#input_21_1").check({ force: true });
  }

  // ---------------------------------------------
  // NASCIMENTO
  // ---------------------------------------------
  preencherDataNascimento(mes, dia, ano) {
    cy.get("#input_22_month").select(mes);
    cy.get("#input_22_day").select(dia);
    cy.get("#input_22_year").select(ano);
  }

  // ---------------------------------------------
  // VISÃO
  // ---------------------------------------------
  preencherDataVisao(mes, dia, ano) {
    cy.get("#input_23_month").select(mes);
    cy.get("#input_23_day").select(dia);
    cy.get("#input_23_year").select(ano);
  }

  preencherResultadoVisao(valor) {
    cy.get("#input_24").clear().type(valor);
  }

  selecionarRechecagemVisao(valor) {
    valor === "Sim"
      ? cy.get("#input_25_0").check({ force: true })
      : cy.get("#input_25_1").check({ force: true });
  }

  // ---------------------------------------------
  // NECESSIDADES ESPECIAIS
  // ---------------------------------------------
  preencherNecessidadesEspeciais(texto) {
    cy.get("#input_26").clear().type(texto);
  }

  // ---------------------------------------------
  // DISCIPLINA
  // ---------------------------------------------
  preencherRelatoriosDisciplina(valor) {
    cy.get("#input_27").clear().type(valor);
  }

  preencherSuspensoes(valor) {
    cy.get("#input_28").clear().type(valor);
  }

  preencherSuspensoesEscola(valor) {
    cy.get("#input_29").clear().type(valor);
  }

  preencherSuspensoesFora(valor) {
    cy.get("#input_30").clear().type(valor);
  }

  // ---------------------------------------------
  // NOTAS
  // ---------------------------------------------
  preencherNotaLeitura(valor) {
    cy.get("#input_31").clear().type(valor);
  }

  preencherNotaCiencias(valor) {
    cy.get("#input_32").clear().type(valor);
  }

  preencherNotaSociais(valor) {
    cy.get("#input_33").clear().type(valor);
  }

  preencherNotaEdFisica(valor) {
    cy.get("#input_34").clear().type(valor);
  }

  preencherNotaOutro(valor) {
    cy.get("#input_35").clear().type(valor);
  }

  // ---------------------------------------------
  // RETENÇÃO
  // ---------------------------------------------
  preencherAnoRetencao(valor) {
    cy.get("#input_36").clear().type(valor);
  }

  preencherNotasRetencao(valor) {
    cy.get("#input_37").clear().type(valor);
  }

  preencherEscolaAnterior(valor) {
    cy.get("#input_38").clear().type(valor);
  }

  // ---------------------------------------------
  // ENVIO
  // ---------------------------------------------
  enviarFormulario() {
    cy.get("#input_39").click({ force: true });
  }

  validarMensagemSucesso(mensagem) {
    cy.contains(mensagem).should("be.visible");
  }
}

export default CadastroAlunoPage;
