class CadastroAlunoElements {
  // -----------------------
  // CAMPOS DO ALUNO
  // -----------------------
  nomeAluno = () => "#first_3";
  sobrenomeAluno = () => "#last_3";

  dataReferenciaDia = () => "#input_4_day";
  dataReferenciaMes = () => "#input_4_month";
  dataReferenciaAno = () => "#input_4_year";

  serie = () => "#input_5";

  // -----------------------
  // RESPONSÁVEIS
  // -----------------------
  nomeMae = () => "#first_6";
  sobrenomeMae = () => "#last_6";

  nomePai = () => "#first_7";
  sobrenomePai = () => "#last_7";

  // -----------------------
  // TELEFONES
  // -----------------------
  telResDdd = () => "#input_8_area";
  telResNum = () => "#input_8_phone";

  telCelDdd = () => "#input_9_area";
  telCelNum = () => "#input_9_phone";

  telProfDdd = () => "#input_10_area";
  telProfNum = () => "#input_10_phone";

  // -----------------------
  // ENDEREÇO
  // -----------------------
  endereco = () => "#input_11_addr_line1";
  bairro = () => "#input_11_addr_line2";
  cidade = () => "#input_11_city";
  estado = () => "#input_11_state";
  cep = () => "#input_11_postal";
  pais = () => "#input_11_country";

  // -----------------------
  // ÁREA ACADÊMICA
  // -----------------------
  areaMatematica = () => "#input_12_0";
  areaLeitura = () => "#input_12_1";
  areaOutro = () => "#input_13_2";

  // -----------------------
  // COMPORTAMENTO
  // -----------------------
  comportamento = () => "#input_14_0";

  // -----------------------
  // PRESENÇA
  // -----------------------
  diasPresentes = () => "#input_16";
  diasAusentes = () => "#input_17";

  // -----------------------
  // ESCOLAS ANTERIORES
  // -----------------------
  escolasAnteriores = () => "#input_18";

  // -----------------------
  // PROVAS
  // -----------------------
  notaMatematica = () => "#input_20";
  notaPortugues = () => "#input_21";

  // -----------------------
  // TRIAGEM
  // -----------------------
  triagemMes = () => "#input_25_month";
  triagemDia = () => "#input_25_day";
  triagemAno = () => "#input_25_year";

  resultadoTriagem = () => "#input_23";

  reavaliacaoSim = () => "#input_26_0";
  reavaliacaoNao = () => "#input_26_1";

  // -----------------------
  // DATA DE NASCIMENTO
  // -----------------------
  nascMes = () => "#input_27_month";
  nascDia = () => "#input_27_day";
  nascAno = () => "#input_27_year";

  // -----------------------
  // VISÃO
  // -----------------------
  visaoMes = () => "#input_27_month";
  visaoDia = () => "#input_27_day";
  visaoAno = () => "#input_27_year";

  resultadoVisao = () => "#input_24";

  rechecagemVisaoSim = () => "#input_30_0";
  rechecagemVisaoNao = () => "#input_30_1";

  // -----------------------
  // NECESSIDADES ESPECIAIS
  // -----------------------
  necessidadesEspeciais = () => "#input_24";

  // -----------------------
  // DISCIPLINA
  // -----------------------
  relatoriosDisciplina = () => "#input_32";
  suspensoes = () => "#input_33";
  suspensoesEscola = () => "#input_34";
  suspensoesFora = () => "#input_35";

  // -----------------------
  // NOTAS FINAIS
  // -----------------------
  notaPortuguesFinal = () => "#input_38_0";
  notaLeituraFinal = () => "#input_38_1";
  notaMatematicaFinal = () => "#input_38_2";
  notaCiencias = () => "#input_38_3";
  notaSociais = () => "#input_38_4";
  notaEdFisica = () => "#input_38_5";
  notaOutroFinal = () => "#input_38_6";

  // -----------------------
  // RETENÇÃO
  // -----------------------
  retencaoAno = () => "#input_36";
  retencaoNotas = () => "#input_40";
  retencaoEscolaAnterior = () => "#input_42";

  // -----------------------
  // ENVIO DO FORMULÁRIO
  // -----------------------
  botaoEnviar = () => "#input_2";

  // -----------------------
  // CONFIRMAÇÃO
  // -----------------------
  mensagemSucesso = () => ".thankyou-main-text.ty-text";
}

export default CadastroAlunoElements;
