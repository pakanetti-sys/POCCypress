#language: pt

Funcionalidade: Cadastro de Usuário
  Como um visitante
  Quero preencher o formulário do DemoQA
  Para validar o fluxo de cadastro automatizado

  Contexto:
    Dado que estou na página de cadastro de estudante

  Esquema do Cenário: Realizar o cadastro com dados variados
    Quando eu preencho o formulário com os dados:
      | firstName | <firstName> |
      | lastName  | <lastName>  |
      | email     | <email>     |
      | gender    | <gender>    |
      | phone     | <phone>     |
    Então o formulário deve ser enviado com sucesso

    Exemplos:
      | firstName | lastName | email               | gender | phone       |
      | João      | Silva    | joao@teste.com      | Male   | 11999999999 |
      | Maria     | Souza    | maria@teste.com     | Female | 11988888888 |
      | Carlos    | Santos   | carlos@teste.com    | Male   | 11977777777 |
