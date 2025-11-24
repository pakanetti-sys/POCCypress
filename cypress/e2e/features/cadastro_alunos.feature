#language: pt

Funcionalidade: Cadastro completo de alunos no JotForm
  Como usuário
  Desejo preencher o formulário completo de cadastro de alunos
  Para gerar registros e validações automatizadas

  Contexto:
    Dado que estou na página do formulário de alunos

  @cadastro_completo
  Esquema do Cenário: Preencher o formulário completo do aluno
    Quando preencho o campo Nome do estudante "<nome_aluno>"
    E preencho o Sobrenome do estudante "<sobrenome_aluno>"
    E seleciono a Data de referência "<dia_ref>" "<mes_ref>" "<ano_ref>"
    E seleciono a Série "<serie>"
    E preencho o nome da mãe "<nome_mae>"
    E preencho o sobrenome da mãe "<sobrenome_mae>"
    E preencho o nome do pai "<nome_pai>"
    E preencho o sobrenome do pai "<sobrenome_pai>"
    E preencho o telefone residencial "<ddd_res>" "<tel_res>"
    E preencho o telefone celular "<ddd_cel>" "<tel_cel>"
    E preencho o telefone profissional "<ddd_prof>" "<tel_prof>"
    E preencho o endereço "<endereco>"
    E preencho o bairro "<bairro>"
    E preencho a cidade "<cidade>"
    E preencho o estado "<estado>"
    E preencho o CEP "<cep>"
    E seleciono o país "<pais>"
    E seleciono áreas acadêmicas "<area_mat>" "<area_leitura>" "<area_outro>"
    E seleciono comportamento "<comportamento>"
    E preencho os dias presentes "<dias_presentes>"
    E preencho os dias ausentes "<dias_ausentes>"
    E preencho lista de escolas anteriores "<escolas_anteriores>"
    E preencho nota de Matemática "<nota_mat_inicial>"
    E preencho nota de Português "<nota_port_inicial>"
    E preencho Data da triagem "<tri_mes>" "<tri_dia>" "<tri_ano>"
    E preencho resultado da triagem "<resultado_triagem>"
    E seleciono necessidade de reavaliação "<reavaliacao>"
    E preencho data de nascimento "<nasc_mes>" "<nasc_dia>" "<nasc_ano>"
    E preencho data da visão "<visao_mes>" "<visao_dia>" "<visao_ano>"
    E preencho resultado da visão "<resultado_visao>"
    E seleciono rechecagem de visão "<rechecagem>"
    E preencho necessidades especiais "<necessidades>"
    E preencho relatórios de disciplina "<relatorios>"
    E preencho suspensões "<susp_total>"
    E preencho suspensões na escola "<susp_escola>"
    E preencho suspensões fora da escola "<susp_fora>"
    E preencho nota final de português "<nota_port_final>"
    E preencho nota final de leitura "<nota_leitura_final>"
    E preencho nota final de matemática "<nota_mat_final>"
    E preencho nota final de ciências "<nota_ciencias_final>"
    E preencho nota final de estudos sociais "<nota_sociais_final>"
    E preencho nota final de educação física "<nota_edfisica_final>"
    E preencho outra nota "<nota_outro_final>"
    E preencho retenção do ano "<retencao_ano>"
    E preencho notas da retenção "<retencao_nota>"
    E preencho escola anterior "<retencao_escola>"
    E envio o formulário
    Então devo ver a mensagem de confirmação "<mensagem>"

       Exemplos:
  | nome_aluno | sobrenome_aluno | dia_ref | mes_ref   | ano_ref | serie | nome_mae | sobrenome_mae | nome_pai | sobrenome_pai | ddd_res | tel_res  | ddd_cel | tel_cel    | ddd_prof | tel_prof  | endereco     | bairro      | cidade | estado | cep        | pais   | area_mat | area_leitura | area_outro | comportamento | dias_presentes | dias_ausentes | escolas_anteriores | nota_mat_inicial | nota_port_inicial | tri_mes | tri_dia | tri_ano | resultado_triagem | reavaliacao | nasc_mes  | nasc_dia | nasc_ano | visao_mes | visao_dia | visao_ano | resultado_visao | rechecagem | necessidades     | relatorios | susp_total | susp_escola | susp_fora | nota_leitura_final | nota_mat_final | nota_port_final | nota_ciencias_final | nota_sociais_final | nota_edfisica_final | nota_outro_final | retencao_ano | retencao_nota | retencao_escola | mensagem   |
  | João       | Silva           | 10      | April     | 2024    | 5th   | Maria    | Silva         | Carlos   | Silva         | 11      | 12345678 | 11      | 912345678  | 11       | 40028922  | Rua A, 123   | Centro      | SP     | SP     | 01000-000  | Brazil | true     | true         | true       | Sim           | 180            | 5             | Escola X          | 9                | 8                | March   | 12      | 2023    | Aprovado         | Não         | April     | 10       | 2013     | May       | 12        | 2023     | Normal         | Não        | Nenhuma         | 0         | 0         | 0         | 0         | 9                 | 7             | 8              | 9                  | 8                  | 10                 | 8               | 2022        | Nota alta     | Escola Antiga   | Obrigado! |
  | Ana        | Souza           | 5       | March     | 2024    | 6th   | Luiza    | Souza         | Paulo    | Souza         | 21      | 22334455 | 21      | 998877665 | 21       | 30303030  | Rua B, 456   | Vila Alta   | RJ     | RJ     | 20000-000  | Brazil | true     | true         | true       | Não           | 170            | 12            | Escola Y          | 10               | 9                | February| 20      | 2023    | Bom              | Não         | August    | 14       | 2012     | June      | 28        | 2023     | Baixa          | Não        | Déficit leve    | 1         | 1         | 0         | 1         | 10                | 9             | 8              | 7                  | 9                  | 9                  | 7               | 2021        | Média         | Escola Beta     | Obrigado! |
  | Pedro      | Lima            | 15      | May       | 2024    | 7th   | Carla    | Lima          | Roberto  | Lima          | 31      | 40404040 | 31      | 987654321 | 31       | 50505050  | Rua C, 789   | Bairro Novo | BH     | MG     | 30000-000  | Brazil | true     | true         | true       | Sim           | 160            | 20            | Escola Z          | 7                | 8                | January | 5       | 2023    | Regular          | Não         | October   | 22       | 2011     | July      | 18        | 2023     | Normal         | Não        | Necessita apoio | 2         | 2         | 1         | 1         | 8                 | 10            | 9              | 8                  | 7                  | 6                  | 7               | 2020        | Fraca         | Escola Gama     | Obrigado! |

