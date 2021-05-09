$('#btn-enviar').click((event)=>{
event.preventDefault()
const cepUsuario = parseInt($('#cep-usuario').val())
console.log(cepUsuario)
$.ajax({
    url : `http://viacep.com.br/ws/${cepUsuario}/json/`,
    'success' : function(result){
        console.log(result)
        preencherAuto(result)
    }
  })
})

function preencherAuto(result){
    $('#bairro').val(result.bairro)
    $('#rua').val(result.logradouro)
    $('#cidade').val(result.localidade)
    $('#uf').val(result.uf)
}