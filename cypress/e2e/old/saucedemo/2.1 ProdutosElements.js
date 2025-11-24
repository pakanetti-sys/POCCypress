// cypress/support/elements/2.1 ProdutosElements.js
class ProdutosElements {
  produtoItem = () => ".inventory_item";
  produtoItemNome = () => ".inventory_item_name";
  produtoPreco = () => ".inventory_item_price";
  botaoAddCarrinho = () => "button[data-test*='add-to-cart']";
  botaoCarrinho = () => ".shopping_cart_link";
}

export default new ProdutosElements();
