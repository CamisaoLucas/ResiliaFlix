//Se tudo estiver Ok! Mostrar na tela.
class ViewsCadastro{
    addView(infoCadastroFinalizado){
        $('#main-form').css('display','none')
        $('#cadastro-concluido').css('opacity','1')
        $('#cadastro-concluido').html(`<h1>Cadastro feito com sucesso!</h1>
        <h2>Olá ${infoCadastroFinalizado.getNome()}! Bem vindo(a) ao 
        <span class="cor-amarelho">RESILIA</span><span class="cor-vermelho">FLIX</span></h2>,
        <h2>Verifique seu e-mail (${infoCadastroFinalizado.getEmail()}) para receber as informações e confirmação 
        de cadastro.</h2>
        `)
    }
}