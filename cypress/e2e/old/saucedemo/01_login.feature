#language: pt

Funcionalidade: Login no sistema SauceDemo

  Contexto:
    Dado que acesso a página inicial do sistema

  Cenário: Login com sucesso
    Quando preencho minhas credenciais válidas
    E confirmo o login
    Então devo visualizar a lista de produtos

  Esquema do Cenário: Tentativa de login com dados variados
    Quando preencho o login "<login>" e a senha "<senha>"
    E confirmo o login
    Então devo visualizar "<mensagem>"

    Exemplos:
      | login         | senha        | mensagem |
      | standard_user | secret_sauce | Products |

