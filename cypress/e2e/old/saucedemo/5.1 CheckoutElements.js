class CheckoutElements {

  inputNome = () => '[data-test="firstName"]';
  inputSobrenome = () => '[data-test="lastName"]';
  inputCEP = () => '[data-test="postalCode"]';

  botaoContinue = () => '[data-test="continue"]';
  botaoFinish = () => '[data-test="finish"]';

  mensagemSucesso = () => '.complete-header';
}

export default new CheckoutElements();
