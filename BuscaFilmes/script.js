$('.btn').click(function(event){
    event.preventDefault()
    let resposta = $('.resposta').val().split(" ")
    let conversao = resposta.join(`+`)
    $.ajax({
        "url" : `http://www.omdbapi.com/?apikey=708a483d&S=${conversao}&plot=full`,
        "success" : ()=>{
            
        },
        'error':function(erro){
        }
      });
});

class Filmes{
    constructor(poster, titulo, ano){
        this.poster = poster,
        this.titulo = titulo,
        this.ano = ano
    }

    

}