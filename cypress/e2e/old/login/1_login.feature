#language: pt

Funcionalidade: Login no sistema Sauce Demo

  Como Analista de QA
  Quero validar o fluxo de autenticação do sistema
  Para garantir que usuários autorizados consigam acessar corretamente a aplicação

Contexto:
    Dado que acesso a página inicial do site

  Cenário: Login com sucesso
    Quando preencho minhas credenciais válidas
    E confirmo o login
    Então devo visualizar a lista de produtos

  Esquema do Cenário: Tentativa de login realizada com sucesso
    Quando preencho minhas credenciais válidas "<login>" e a senha "<senha>"
    E confirmo o login
    Então devo visualizar a lista de produtos

    Exemplos:
      | login          | senha          |
      | standard_user  | secret_sauce   |
