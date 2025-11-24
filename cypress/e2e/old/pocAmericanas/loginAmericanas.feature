#language: pt

Funcionalidade: Login no site Americanas
  Como Analista de QA
  Quero validar o processo de autenticação do site
  Para garantir que usuários válidos consigam acessar e que erros sejam exibidos corretamente

  Contexto:
    Dado que acesso a página de login da Americanas

  Cenário: Login com sucesso
    Quando preencho minhas credenciais válidas
    E confirmo o login
    Então devo ser autenticado com sucesso

  Cenário: Login com dados inválidos
    Quando preencho credenciais inválidas
    E confirmo o login
    Então devo visualizar uma mensagem de erro de autenticação

  Esquema do Cenário: Tentativas de login com diferentes combinações
    Quando preencho o email "<email>" e a senha "<senha>"
    E confirmo o login
    Então o sistema deve apresentar "<mensagem>"

    Exemplos:
      | email         | senha      | mensagem                    |
      | qa@teste.com  | errado123  | Credenciais inválidas       |
      | invalido      | Senha123   | Formato de email inválido   |
      | qa@teste.com  |            | Campo senha obrigatório     |
      |               | Senha123   | Campo email obrigatório     |
