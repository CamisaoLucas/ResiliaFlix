$('#btn-enviar').click((event)=>{
event.preventDefault()
})

$('#cep-usuario').on('input' , function(){ //pegar os dados ao colocar
    $.ajax({
        url : `http://viacep.com.br/ws/${$('#cep-usuario').val()}/json/`,
        'success' : function(result){
            console.log(result)
            $('#cep-valido').addClass('invisivel')
            preencherAuto(result)
        },'error':function(erro){ //validar CEP
            $('#cep-valido').removeClass('invisivel')
            $('#bairro').val("")
            $('#rua').val("")
            $('#cidade').val("")
            $('#uf').val("")
        }
      })
})

function preencherAuto(result){
    $('#bairro').val(result.bairro)
    $('#rua').val(result.logradouro)
    $('#cidade').val(result.localidade)
    $('#uf').val(result.uf)
}