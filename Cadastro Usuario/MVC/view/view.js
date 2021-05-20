//Se tudo estiver Ok! Mostrar na tela.
class ViewsCadastro{
    addView(infoCadastroFinalizado){
        $('#main-form').css('display','none')
        $('#cadastro-concluido').css('opacity','1')
        $('#cadastro-concluido').html(`<div class="container-fluid">
        <h1>Cadastro feito com sucesso!</h1>
        <h2>Olá ${infoCadastroFinalizado.getNome()}! Bem vindo(a) ao:</h2> 
        <h2><a class="navbar-brand" href="../index.html"><span id="resilia">Resilia</span><span id="flix">Flix</span></a></h2>
        <h2>Verifique seu e-mail (${infoCadastroFinalizado.getEmail()}) para receber as informações e confirmações 
        de cadastro.</h2>
        <h1 class="palavra-obrigado"><u><i>Obrigado pela preferência!</i></u></h1>
        <img class="img-obrigado" src="./imgCadastro/taxi.gif">
        <div>
        `)
    }
}