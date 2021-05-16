$('.btn').click(function(event){
    event.preventDefault()
    let resposta = $('.resposta').val().split(" ")
    let conversao = resposta.join(`+`)
    $.ajax({
        //requesição de todos os filmes de acordo com a pesquisa.
        "url" : `http://www.omdbapi.com/?apikey=708a483d&S=${conversao}`,
        "success" : (req)=>{
            console.log(req)
            let recebe = req.Search
            
        //passa por dentro da array de filmes recebida.
            for(let i = 0; i<recebe.length; i++){
        //verifica se o o typo realmente é um filme
            if(recebe[i].Type == 'movie'){   

                let filmes = new Filmes(recebe[i]);

        $.ajax({
            //requisiçao de todas(FULL) as informações de cada filme.
            "url" : `http://www.omdbapi.com/?apikey=708a483d&t=${recebe[i].Title}&plot=full`,
            "success" : (req)=>{
                filmes.pegaInfo(req.Plot)
            },
            'error':function(erro){
            }
            });
                
                filmes.mostrarFilmes()
            }}
            
        },
        'error':function(erro){
        }
      });
});


class Filmes{
    constructor(results){

        this.img = results.Poster;
        this.nome = results.Title;
        this.descricao;
        this.ano = results.Year;
        this.lancamento = results.Released;
        this.duracao = results.Runtime;
        this.genero = results.Genre;
        this.diretor = results.Director;
    }

    mostrarFilmes(){
        $(`#posicao-filmes`).html(`<div id="posicao-filmes"></div>`)

        setTimeout(() => {
            
             $(`#posicao-filmes`).append(`
           <div class="filmes"><h1>${this.nome}</h1>
            <img src = ${this.img}>
            <p>${this.descricao}</p>
            <p>${this.ano}</p></div>`) 
          
        }, 500);              
    }

    pegaInfo(requesicao){
        this.descricao = requesicao
    } 
}

