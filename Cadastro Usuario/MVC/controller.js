//Pegar os dados cadastrados, para poder armazenar futuramente, e mostrar o nome e o e-mail na tela.
class ConstrollerAdd {
    //armazenar os dados em uma array.
    constructor(){
        this._cadastroArray = []
    }
    addConstroler(){
        const infoCadastroFinalizado = new Cadastro(
            $('#validationCustom01').val(), //nome
            $('#validationCustom02').val(), //sobreNome
            $('#validationCustom03').val(), //email
            $('#validationCustom04').val(), //senha
            $('#validationCustom06').val(), //rg
            $('#validationCustom07').val(), //cep
            $('#validationCustom08').val(), //cidade
            $('#validationCustom09').val(), //estado
            $('#validationCustom10').val(), //bairro
            $('#validationCustom11').val(), //endereço
            $('#validationCustom12').val(), //numero
            $('#validationCustom14').val()
        )
        const viewsCadastro = new ViewsCadastro()
        cadastroFinalizado.addInfoArray(infoCadastroFinalizado) //armazenar os dados.

        viewsCadastro.addView(infoCadastroFinalizado)
    }
    addInfoArray(infoCadastroFinalizado){
        this._cadastroArray.push(infoCadastroFinalizado) //armazenar os dados em uma array.
    }
}