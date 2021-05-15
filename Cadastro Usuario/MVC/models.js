//Class Cadastro- Criar cadastro apartir das informações do usuário
class Cadastro {
    constructor(nome,sobreNome, email, senha, rg, cep, estado, cidade, bairro, rua, numeroRua, complementoRua) {
      this._nome = `${nome} ${sobreNome}`;
      this._email = email;
      this._senha = senha;
      this._rg = rg;
      this._cep = cep;
      this._estado = estado;
      this._cidade = cidade;
      this._bairro = bairro;
      this._rua = rua;
      this._numeroRua = numeroRua;
      this._complementoRua = complementoRua;
    }
    getNome(){
      return this._nome
    }
    getEmail(){
      return this._email
    }
}