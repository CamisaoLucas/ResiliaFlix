//--------------BootStrap---------------
//Busque todos os formulários aos quais queremos aplicar estilos de validação de Bootstrap personalizados
let forms = document.querySelectorAll('.needs-validation')
// Passe por cima deles e evite o envio
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        cadastroFinalizado.addConstroler() //pegar os dados
      }
      confirmaSenhaValida()
      form.classList.add('was-validated')
    })
  })
//Confirmação de senha:
let validacao05 = document.querySelector('#validationCustom05') //pegar o input "confirmação de senha"
function confirmaSenhaValida() {
  $('#validationCustom05').on('input', function () { //validationCustom04 - senha .. validationCustom05 - Confirmacao de senha
    if ($('#validationCustom04').val() == $('#validationCustom05').val()) {
      validacao05.setCustomValidity('') //é valido
    } else {
      validacao05.setCustomValidity('Não é valido') //não é valido
    }
  })
}

//--------------------------validar CEP---------------------------------------
$('#validationCustom07').on('blur', function () { //blur - pegar os dados quando ele acabar de digitar
  let validacaoCep = document.querySelector('#validationCustom07')
  $.ajax({
    url: `http://viacep.com.br/ws/${$('#validationCustom07').val()}/json/`,
    'success': function (result) {
      validacaoCep.setCustomValidity('') //Valida CEP
      preencherAuto(result)
    }, 'error': function (erro) { //validar CEP
      validacaoCep.setCustomValidity('CEP invalido') //Cep invalido
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

const cadastroFinalizado = new ConstrollerAdd; //criar "ativar a class Constroller"

//Valida RG - com 8 caracteres
let valida06 = document.querySelector('#validationCustom06')
$('#validationCustom06').on('input',()=>{
  if ($('#validationCustom06').val().length == 8) {
    valida06.setCustomValidity('') //é valido
  } else {
    valida06.setCustomValidity('Não é valido') //não é valido
  }
})