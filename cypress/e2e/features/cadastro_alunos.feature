Feature: Cadastro de Alunos
  Como um avaliador
  Quero preencher o formulário do JotForm
  Para registrar corretamente os dados dos estudantes

  Background:
    Dado que estou na página do formulário de alunos

  Scenario Outline: Preencher o formulário completo de cadastro de aluno
    Quando preencho o campo Nome do estudante "<nomeAluno>"
    E preencho o Sobrenome do estudante "<sobrenomeAluno>"
    E seleciono a Data de referência "<diaRef>" "<mesRef>" "<anoRef>"
    E seleciono a Série "<serie>"
    E preencho o nome da mãe "<nomeMae>"
    E preencho o sobrenome da mãe "<sobrenomeMae>"
    E preencho o nome do pai "<nomePai>"
    E preencho o sobrenome do pai "<sobrenomePai>"
    E preencho o telefone residencial "<telResDDD>" "<telResNumero>"
    E preencho o telefone celular "<telCelDDD>" "<telCelNumero>"
    E preencho o telefone profissional "<telProfDDD>" "<telProfNumero>"
    E preencho o endereço "<endereco>"
    E preencho o bairro "<bairro>"
    E preencho a cidade "<cidade>"
    E preencho o estado "<estado>"
    E preencho o CEP "<cep>"
    E seleciono o país "<pais>"
    E seleciono áreas acadêmicas "<areaMat>" "<areaLeitura>" "<areaOutro>"
    E seleciono comportamento "<comportamento>"
    E preencho os dias presentes "<diasPres>"
    E preencho os dias ausentes "<diasAus>"
    E preencho lista de escolas anteriores "<escolas>"
    E preencho nota de Matemática "<notaMat>"
    E preencho nota de Português "<notaPort>"
    E preencho Data da triagem "<mesTriagem>" "<diaTriagem>" "<anoTriagem>"
    E preencho resultado da triagem "<resultadoTriagem>"
    E seleciono necessidade de reavaliação "<reavaliacao>"
    E preencho data de nascimento "<mesNasc>" "<diaNasc>" "<anoNasc>"
    E preencho data da visão "<mesVisao>" "<diaVisao>" "<anoVisao>"
    E preencho resultado da visão "<resultadoVisao>"
    E seleciono rechecagem de visão "<rechecagemVisao>"
    E preencho necessidades especiais "<necEspeciais>"
    E preencho relatórios de disciplina "<relatorios>"
    E preencho suspensões "<suspensoes>"
    E preencho suspensões na escola "<suspEscola>"
    E preencho suspensões fora da escola "<suspFora>"
    E preencho nota de leitura "<notaLeitura>"
    E preencho nota de ciências "<notaCiencias>"
    E preencho nota de estudos sociais "<notaSociais>"
    E preencho nota de educação física "<notaEdFisica>"
    E preencho outra nota "<notaOutro>"
    E preencho retenção do ano "<anoRetencao>"
    E preencho notas da retenção "<notaRetencao>"
    E preencho escola anterior "<escolaAnterior>"
    E envio o formulário
    Então devo ver a mensagem de confirmação "<mensagem>"

  Examples:
    | nomeAluno | sobrenomeAluno | diaRef | mesRef | anoRef | serie | nomeMae | sobrenomeMae | nomePai | sobrenomePai | telResDDD | telResNumero | telCelDDD | telCelNumero | telProfDDD | telProfNumero | endereco | bairro | cidade | estado | cep | pais | areaMat | areaLeitura | areaOutro | comportamento | diasPres | diasAus | escolas | notaMat | notaPort | mesTriagem | diaTriagem | anoTriagem | resultadoTriagem | reavaliacao | mesNasc | diaNasc | anoNasc | mesVisao | diaVisao | anoVisao | resultadoVisao | rechecagemVisao | necEspeciais | relatorios | suspensoes | suspEscola | suspFora | notaLeitura | notaCiencias | notaSociais | notaEdFisica | notaOutro | anoRetencao | notaRetencao | escolaAnterior | mensagem |
    | João      | Silva          | 10     | 03     | 2024   | 5ª    | Maria    | Silva        | Pedro    | Silva         | 11        | 40001234     | 11        | 988887777    | 11         | 34567890      | Rua A    | Centro | SP     | SP     | 01000-000 | Brasil | sim | sim | não | Extrovertido | 180 | 5 | Escola Alfa | 8 | 9 | 03 | 02 | 2024 | Completo | sim | 05 | 20 | 2014 | 06 | 21 | 2024 | Normal | não | Nenhuma | 0 | 0 | 0 | 0 | 9 | 8 | 7 | 9 | 10 | 2022 | Aprovado | Escola Alfa | Obrigado! |
    | Ana       | Oliveira       | 08     | 02     | 2024   | 6ª    | Paula    | Oliveira     | Marcos   | Oliveira      | 21        | 58889999     | 21        | 977779999    | 21         | 33335555      | Rua B    | Centro | RJ     | RJ     | 22000-000 | Brasil | sim | não | não | Introvertido | 170 | 12 | Escola Beta | 7 | 9 | 02 | 01 | 2024 | Parcial | não | 03 | 15 | 2013 | 04 | 10 | 2024 | Normal | sim | TEA | 3 | 1 | 1 | 0 | 8 | 8 | 9 | 8 | 9 | 2021 | Reprovado | Escola Beta | Obrigado! |
    | Lucas     | Pereira        | 15     | 05     | 2024   | 4ª    | Carla    | Pereira      | João     | Pereira       | 31        | 32224444     | 31        | 997772222    | 31         | 34567789      | Rua C    | Centro | BH    | MG     | 30000-000 | Brasil | não | sim | sim | Extrovertido | 160 | 20 | Escola Gama | 6 | 7 | 05 | 07 | 2024 | Completo | sim | 04 | 25 | 2012 | 06 | 14 | 2024 | Baixa visão | não | Nenhuma | 1 | 0 | 0 | 1 | 6 | 7 | 9 | 5 | 8 | 2023 | Aprovado | Escola Gama | Obrigado! |
