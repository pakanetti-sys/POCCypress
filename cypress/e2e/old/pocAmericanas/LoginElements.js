class LoginElements {

  // botão inicial para abrir modal
  botaoEntrarEmailSenha = () => 'span:contains("Entrar com email e senha")';
  
  // campo e-mail
  campoEmail = () => 'input[placeholder="ex.: exemplo@mail.com"]';

  // campo senha
  campoSenha = () => 'input[placeholder="adicione sua senha"]';

  // botão confirmar login
  botaoConfirmar = () => 'button[type="submit"]';

}

export default new LoginElements();
