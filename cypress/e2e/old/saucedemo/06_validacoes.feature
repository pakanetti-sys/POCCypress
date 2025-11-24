# language: pt
Funcionalidade: Validações do sistema
  Como Analista de QA
  Quero validar mensagens de erro e regras do sistema
  Para garantir comportamento correto em cenários negativos

  @loginInvalido
 Cenário: Login com dados inválidos
  Dado que acesso a página inicial do sistema
  Quando tento realizar login com usuario "locked_out_user" e senha "secret_sauce"
  Então devo visualizar a mensagem de erro de login "Epic sadface: Sorry, this user has been locked out."

  @checkoutSemProduto
Cenário: Tentativa de checkout sem produto
  Dado que realizo login no sistema
  Quando acesso o carrinho para validações
  E tento prosseguir para o checkout
  Então devo ser encaminhado para a página de checkout

  @checkoutCamposObrigatorios
  Cenário: Campos obrigatórios não preenchidos
    Dado que realizo login no sistema
    E adiciono o produto "Sauce Labs Backpack" ao carrinho
    E acesso o carrinho
    Quando tento prosseguir com o checkout sem preencher os dados
    Então devo visualizar a mensagem de erro no checkout "Error: First Name is required"
