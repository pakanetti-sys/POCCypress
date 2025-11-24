#language: pt

Funcionalidade: Finalização de compra

  Cenário: Realizar checkout com sucesso
    Dado que realizo login no sistema
    E adiciono o produto "Sauce Labs Backpack" ao carrinho
    E acesso o carrinho para checkout
    Quando prossigo para o checkout
    E preencho meus dados de checkout
    E confirmo o pedido
    Então devo visualizar a mensagem de sucesso "Thank you for your order!"
