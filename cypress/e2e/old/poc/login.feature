#language: pt

Funcionalidade: Login no sistema Sauce Demo

  Como Analista de QA
  Quero validar o fluxo de autenticação do sistema
  Para garantir que usuários autorizados consigam acessar corretamente a aplicação

  Cenário: Login com sucesso
    Dado que acesso o site SauceDemo
    Quando faço login com usuário "standard_user" e senha "secret_sauce"
    Então devo visualizar a lista de produtos
