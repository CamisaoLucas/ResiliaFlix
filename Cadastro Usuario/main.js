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
        const cadastroFinalizado = enviarFinalizacao() // pegar os dados
        validaSubmit(cadastroFinalizado)
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
$('#validationCustom07').on('input', function () { //pegar os dados ao colocar
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
}
function enviarFinalizacao(cadastroFinalizado){
    cadastroFinalizado = new Cadastro(
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
    return cadastroFinalizado
}

//Se tudo estiver Ok!
function validaSubmit(cadastroFinalizado) {
  $('#main-form').css('display','none')
  $('#cadastro-concluido').css('opacity','1')
  $('#cadastro-concluido').html(`<h1>Cadastro feito com sucesso!</h1>
  <h2>Olá ${cadastroFinalizado._nome}! Bem vindo(a) ao 
  <span class="cor-amarelho">RESILIA</span><span class="cor-vermelho">FLIX</span></h2>,
  <h2>Verifique seu e-mail (${cadastroFinalizado._email}) para receber as informações e confirmação 
  de cadastro.</h2>
  `)
}