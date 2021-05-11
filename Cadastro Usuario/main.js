//--------------BootStrap---------------
//Busque todos os formulários aos quais queremos aplicar estilos de validação de Bootstrap personalizados
let forms = document.querySelectorAll('.needs-validation')

// Passe por cima deles e evite o envio
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        confirmaSenhaValida()
      } else {
        validaSubmit()
      }
      form.classList.add('was-validated')
    })
  })

//Confirmação de senha:
function confirmaSenhaValida() {
  $('#validationCustom05').on('input', function () {
    if ($('#validationCustom04').val() != $('#validationCustom05').val()) {
      $('#senha-mesma-valido').removeClass('invalid-feedback')
      $('#formulario-preencher').removeClass('was-validation')
    } else {
      $('#senha-mesma-valido').addClass('invalid-feedback')
      $('#formulario-preencher').addClass('was-validated')
    }
  })
}

//--------------------------validar CEP---------------------------------------
$('#validationCustom07').on('input', function () { //pegar os dados ao colocar
  $.ajax({
    url: `http://viacep.com.br/ws/${$('#validationCustom07').val()}/json/`,
    'success': function (result) {
      console.log(result)
      $('#cep-valido').addClass('invisivel')
      preencherAuto(result)
    }, 'error': function (erro) { //validar CEP
      $('#cep-valido').removeClass('invisivel')
      $('#validationCustom10').val("") //Bairro
      $('#validationCustom11').val("") //endereço
      $('#validationCustom08').val("")//Cidade
      $('#validationCustom09').val("")//UF
    }
  })
})
//colocar o CEP nos devidos lugares
function preencherAuto(result) {
  $('#validationCustom10').val(result.bairro)//bairro
  $('#validationCustom11').val(result.logradouro)//endereço
  $('#validationCustom08').val(result.localidade) //Cidade
  $('#validationCustom09').val(result.uf) //UF
}

//Se há complemento
$('#validationCustom13').change(function(){
  if($(this).val() == 'sim'){
    $('#reposta-change').removeClass('invisivel-complemento')
  }else{
    $('#reposta-change').addClass('invisivel-complemento')
  }
})

//Se tudo estiver Ok!
function validaSubmit() {
  $('body').html('<h1>Cadastro feito com sucesso!</h1>')
}

//Class Cadastro-
function classCadastro() {
  class Cadastro {
    constructor() {

    }
  }
}