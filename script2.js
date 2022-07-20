let secaoProdutos = document.querySelector('.produtos2')

function listaP(listaPainting){
    for(let i = 0; i < listaPainting.length; i++){
    
        let produtoP = listaPainting[i]

        let cardLista = criarCard(produtoP)

        secaoProdutos.appendChild(cardLista)
        }
    }

listaP(painting)
