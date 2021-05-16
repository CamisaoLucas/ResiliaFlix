//criar array com 12filmes 
let arrId = ['tt0417741', 'tt1457767', 'tt2305051', 'tt5814060', 'tt0903624',
    'tt0113497', 'tt0107290', 'tt0114709', 'tt0094862', 'tt2397535', 'tt4154796', 'tt0081505']

$(document).ready(function () {
           //percorrer o array
for (let i = 0; i < arrId.length; i++) {
    //requisicao 
    $.ajax({
        url: 'http://www.omdbapi.com/',
        //organizacao 
        'data': {
            'i': arrId[i],
            'apikey': '69fafd31'

    
        },
        success: function (resultado) {
           // console.log(resultado.Actors)
             //exibir img 
            document.querySelector('#principal').innerHTML += `<img src="${resultado.Poster}"> `
    
          
        }
    
    })
}
    })
 



