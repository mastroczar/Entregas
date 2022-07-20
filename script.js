let listaProdutos = document.querySelector('.produtos')

function lista(listaAction){
    for(let i = 0; i < listaAction.length; i++){
    
        let produto = listaAction[i]
        let card = criarCard(produto)

        listaProdutos.appendChild(card)
    }
}
    
lista(actionFigure)


function criarCard(produto){
    let nome    = produto.nome
    let preco   = produto.valor 
    let imagem  = produto.imagem
   
    let tagLi       = document.createElement('li')
    let tagImg      = document.createElement('img')
    let tagNome     = document.createElement('h2')
    let tagPreco    = document.createElement('p')

    tagImg.src          = `./src/img/${imagem}`
    tagImg.alt          = nome
    tagNome.innerText   = nome
    tagPreco.innerText  = preco

    
    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)

    return tagLi
}