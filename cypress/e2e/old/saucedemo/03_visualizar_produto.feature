#language: pt

Funcionalidade: Visualização de produto
  Como usuário do sistema
  Quero visualizar os detalhes de um produto
  Para validar as informações apresentadas

  Cenário: Visualizar detalhes do produto
    Dado que realizo login no sistema
    Quando seleciono o produto "Sauce Labs Backpack"
    Então os detalhes do produto devem ser exibidos corretamente
