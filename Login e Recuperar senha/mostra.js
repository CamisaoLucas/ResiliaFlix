//valida e-mail para recuperação de senha
$('#enviar-recSenha').on('click', (event)=>{
    event.preventDefault()
    const email = $('#exampleInputEmail1').val()

    if(email.indexOf('@') >= 0){
        $('.erro-rec').css('display', 'none')
        $('#formulario-deRecS').css('display', 'none')    
        $('#respo-recS').html(`
        <div class="resp-recup">
        <h2>Envio realizado com <u>sucesso!</u></h2>
        <img class="img-respo" src="./img login/9ce5d338b51fbd7b15cf148e70b12377.gif">
        <h3>Favor checar sua caixa de entrada.</h3>
        <a class="nav-link text-light cadastro" href="./login.html">voltar</a>
        </div>`)
    }else{
        $('.erro-rec').html(`
        <p>E-mail inválido.</p>
        `)
    }
})
 



