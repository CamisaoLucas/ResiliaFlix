$('.btn').click(function(event){
    event.preventDefault()
    let resposta = $('.resposta').val().split(" ")
    let conversao = resposta.join(`+`)
    $.ajax({
        //requesição de todos os filmes de acordo com a pesquisa.
        "url" : `http://www.omdbapi.com/?apikey=708a483d&S=${conversao}`,
        "success" : (req)=>{
            let recebe = req.Search
             console.log(recebe)
            //passa por dentro da array de filmes recebida.
            let contador = 0;
            
            for(let i = 0; i < recebe.length; i++){
        //verifica se o o typo realmente é um filme
            if(recebe[i].Type == 'movie'){   
                contador++
                let filmes = new Filmes(recebe[i]);
                filmes.contador = contador
                

        $.ajax({
            //requisiçao de todas(FULL) as informações de cada filme.
            "url" : `http://www.omdbapi.com/?apikey=708a483d&t=${recebe[i].Title}&plot=full`,
            "success" : (req)=>{
                filmes.pegaInfo(req.Plot)

             
                },
            
            'error':function(erro){
                $('#posicao-filmes').html('<h1>FILME NÃO ENCONTRADO!</h1>')
            }
            });
                filmes.mostrarFilmes()
            }}

            
            
        },
        'error':function(erro){
       console.log('deu erro')      
        }
      });
});


class Filmes{
    constructor(results){
        this.contador = 0;
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
           <div class="filmes">
            <h1>${this.nome}</h1>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${this.contador}"><img src = ${this.img}></button>
            
            <div class="modal fade" id="exampleModal${this.contador}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1  class="modal-title" id="exampleModalLabel">${this.nome}</h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src = ${this.img}>
                            <p>${this.descricao}</p>
                            <p>${this.ano}</p></div></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            `)
        }, 500);              
    }

    pegaInfo(requesicao){
        this.descricao = requesicao
    }     
}


