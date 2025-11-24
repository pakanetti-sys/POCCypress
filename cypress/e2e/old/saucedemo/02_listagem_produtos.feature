#language: pt

Funcionalidade: Listagem de produtos
  Como usuário do sistema
  Quero visualizar os produtos disponíveis
  Para validar que estão sendo exibidos corretamente

  Cenário: Validar se um produto específico existe na lista
    Dado que realizo login no sistema
    Quando verifico a existência do produto "Sauce Labs Backpack"
    Então o produto "Sauce Labs Backpack" deve ser exibido na lista
