#language: pt

Funcionalidade: Carrinho de compras

  Cenário: Adicionar produto ao carrinho com sucesso
    Dado que realizo login no sistema
    Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
    E acesso o carrinho
    Então o carrinho deve exibir o produto "Sauce Labs Backpack"

