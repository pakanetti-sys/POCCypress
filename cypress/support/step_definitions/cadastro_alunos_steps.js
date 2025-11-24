import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CadastroAlunoPage from "../../pages/CadastroAlunoPage";

const cadastroPage = new CadastroAlunoPage();

// ------------------------------------------------------
// BACKGROUND
// ------------------------------------------------------
Given("que estou na página do formulário de alunos", () => {
  cadastroPage.acessarFormulario();
  cy.stepScreenshot("01-background");
});


// ------------------------------------------------------
// CAMPOS BÁSICOS DO ALUNO
// ------------------------------------------------------
When("preencho o campo Nome do estudante {string}", (nome) => {
  cadastroPage.preencherNomeAluno(nome);
});

When("preencho o Sobrenome do estudante {string}", (sobrenome) => {
  cadastroPage.preencherSobrenomeAluno(sobrenome);
  cy.stepScreenshot("02-campos-basicos");
});


// ------------------------------------------------------
// DATA DE REFERÊNCIA
// ------------------------------------------------------
When(
  "seleciono a Data de referência {string} {string} {string}",
  (dia, mes, ano) => {
    cadastroPage.preencherDataReferencia(dia, mes, ano);
    cy.stepScreenshot("03-data-referencia");
  }
);



// ------------------------------------------------------
// SÉRIE
// ------------------------------------------------------
When("seleciono a Série {string}", (serie) => {
  cadastroPage.selecionarSerie(serie);
  cy.stepScreenshot("04-serie");
});


// ------------------------------------------------------
// RESPONSÁVEIS
// ------------------------------------------------------
When("preencho o nome da mãe {string}", (nome) => {
  cadastroPage.preencherNomeMae(nome);
});

When("preencho o sobrenome da mãe {string}", (sobrenome) => {
  cadastroPage.preencherSobrenomeMae(sobrenome);
});

When("preencho o nome do pai {string}", (nome) => {
  cadastroPage.preencherNomePai(nome);
});

When("preencho o sobrenome do pai {string}", (sobrenome) => {
  cadastroPage.preencherSobrenomePai(sobrenome);
  cy.stepScreenshot("05-responsaveis");
});


// ------------------------------------------------------
// TELEFONES
// ------------------------------------------------------
When(
  "preencho o telefone residencial {string} {string}",
  (ddd, numero) => {
    cadastroPage.preencherTelefoneResidencial(ddd, numero);
  }
);

When("preencho o telefone celular {string} {string}", (ddd, numero) => {
  cadastroPage.preencherTelefoneCelular(ddd, numero);
});

When("preencho o telefone profissional {string} {string}", (ddd, numero) => {
  cadastroPage.preencherTelefoneProfissional(ddd, numero);
  cy.stepScreenshot("06-telefones");
});



// ------------------------------------------------------
// ENDEREÇO
// ------------------------------------------------------
When("preencho o endereço {string}", (endereco) => {
  cadastroPage.preencherEndereco(endereco);
});

When("preencho o bairro {string}", (bairro) => {
  cadastroPage.preencherBairro(bairro);
});

When("preencho a cidade {string}", (cidade) => {
  cadastroPage.preencherCidade(cidade);
});

When("preencho o estado {string}", (estado) => {
  cadastroPage.preencherEstado(estado);
});

When("preencho o CEP {string}", (cep) => {
  cadastroPage.preencherCEP(cep);
});

When("seleciono o país {string}", (pais) => {
  cadastroPage.selecionarPais(pais);
  cy.stepScreenshot("07-endereco");
});


// ------------------------------------------------------
// ÁREA ACADÊMICA
// ------------------------------------------------------
When(
  "seleciono áreas acadêmicas {string} {string} {string}",
  (mat, leitura, outro) => {
    cadastroPage.selecionarAreaAcademica(mat, leitura, outro);
    cy.stepScreenshot("08-area-academica");
  }
);


// ------------------------------------------------------
// COMPORTAMENTO
// ------------------------------------------------------
When("seleciono comportamento {string}", (comportamento) => {
  cadastroPage.selecionarComportamento(comportamento);
  cy.stepScreenshot("09-comportamento");
});


// ------------------------------------------------------
// PRESENÇA
// ------------------------------------------------------
When("preencho os dias presentes {string}", (dias) => {
  cadastroPage.preencherDiasPresenca(dias);
});

When("preencho os dias ausentes {string}", (dias) => {
  cadastroPage.preencherDiasAusencia(dias);
  cy.stepScreenshot("10-presenca");
});


// ------------------------------------------------------
// ESCOLAS ANTERIORES
// ------------------------------------------------------
When("preencho lista de escolas anteriores {string}", (texto) => {
  cadastroPage.preencherEscolasAnteriores(texto);
  cy.stepScreenshot("11-escolas-anteriores");
});


// ------------------------------------------------------
// PROVAS
// ------------------------------------------------------
When("preencho nota de Matemática {string}", (nota) => {
  cadastroPage.preencherNotaMatematica(nota);
});

When("preencho nota de Português {string}", (nota) => {
  cadastroPage.preencherNotaPortugues(nota);
  cy.stepScreenshot("12-provas");
});



// ------------------------------------------------------
// TRIAGEM
// ------------------------------------------------------
When(
  "preencho Data da triagem {string} {string} {string}",
  (mes, dia, ano) => {
    cadastroPage.preencherDataTriagem(mes, dia, ano);
  }
);

When("preencho resultado da triagem {string}", (resultado) => {
  cadastroPage.preencherResultadoTriagem(resultado);
});

When("seleciono necessidade de reavaliação {string}", (opcao) => {
  cadastroPage.selecionarReavaliacao(opcao);
  cy.stepScreenshot("13-triagem");
});



// ------------------------------------------------------
// DATA DE NASCIMENTO
// ------------------------------------------------------
When(
  "preencho data de nascimento {string} {string} {string}",
  (mes, dia, ano) => {
    cadastroPage.preencherDataNascimento(mes, dia, ano);
  }
);

// ------------------------------------------------------
// VISÃO
// ------------------------------------------------------
When(
  "preencho data da visão {string} {string} {string}",
  (mes, dia, ano) => {
    cadastroPage.preencherDataVisao(mes, dia, ano);
  }
);

When("preencho resultado da visão {string}", (resultado) => {
  cadastroPage.preencherResultadoVisao(resultado);
});

When("seleciono rechecagem de visão {string}", (resultado) => {
  cadastroPage.selecionarRechecagemVisao(resultado);
  cy.stepScreenshot("14-visao");
});


// ------------------------------------------------------
// NECESSIDADES ESPECIAIS
// ------------------------------------------------------
When("preencho necessidades especiais {string}", (texto) => {
  cadastroPage.preencherNecessidadesEspeciais(texto);
  cy.stepScreenshot("15-necessidades-especiais");
});


// ------------------------------------------------------
// DISCIPLINA
// ------------------------------------------------------
When("preencho relatórios de disciplina {string}", (valor) => {
  cadastroPage.preencherRelatoriosDisciplina(valor);
});

When("preencho suspensões {string}", (valor) => {
  cadastroPage.preencherSuspensoes(valor);
});

When("preencho suspensões na escola {string}", (valor) => {
  cadastroPage.preencherSuspensoesEscola(valor);
});

When("preencho suspensões fora da escola {string}", (valor) => {
  cadastroPage.preencherSuspensoesFora(valor);
  cy.stepScreenshot("16-disciplina");
});


// ------------------------------------------------------
// NOTAS FINAIS
// ------------------------------------------------------
When("preencho nota final de português {string}", (valor) => {
  cadastroPage.preencherNotaPortuguesFinal(valor);
});

When("preencho nota final de leitura {string}", (nota) => {
  cadastroPage.preencherNotaLeituraFinal(nota);
});

When("preencho nota final de matemática {string}", (nota) => {
  cadastroPage.preencherNotaMatematicaFinal(nota);
});

When("preencho nota final de ciências {string}", (nota) => {
  cadastroPage.preencherNotaCiencias(nota);
});

When("preencho nota final de estudos sociais {string}", (nota) => {
  cadastroPage.preencherNotaSociais(nota);
});

When("preencho nota final de educação física {string}", (nota) => {
  cadastroPage.preencherNotaEdFisica(nota);
});

When("preencho outra nota {string}", (nota) => {
  cadastroPage.preencherNotaOutro(nota);
  cy.stepScreenshot("17-notas-finais");
});


// ------------------------------------------------------
// RETENÇÃO
// ------------------------------------------------------
When("preencho retenção do ano {string}", (valor) => {
  cadastroPage.preencherAnoRetencao(valor);
});

When("preencho notas da retenção {string}", (valor) => {
  cadastroPage.preencherNotasRetencao(valor);
});

When("preencho escola anterior {string}", (texto) => {
  cadastroPage.preencherEscolaAnterior(texto);
  cy.stepScreenshot("18-retencao");
});

// ------------------------------------------------------
// ENVIO
// ------------------------------------------------------
When("envio o formulário", () => {
  cadastroPage.enviarFormulario();
  cy.stepScreenshot("19-envio");
});

// ------------------------------------------------------
// VALIDAÇÃO
// ------------------------------------------------------
Then("devo ver a mensagem de confirmação {string}", (mensagem) => {
  cadastroPage.validarMensagemSucesso(mensagem);
  cy.stepScreenshot("20-validacao");
});


