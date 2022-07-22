let listaProdutos = document.querySelector('.produtos')

function lista(produto){
    for(let i = 0; i < produto.length; i++){
    
        let prod = produto[i]
        let card = criarCard(prod)

        listaProdutos.appendChild(card)
    }
}

lista(data)

function criarCard(data){
    let nome            = data.nameItem
    let preco           = data.value 
    let imagem          = data.img
    let description     = data.descricao
    let itemTag         = data.tag
   
    let tagLi               = document.createElement('li')
    let tagImg              = document.createElement('img') 
    let tagTag              = document.createElement('h5')
        tagTag.classList.add('tag-produto')
    let tagNome             = document.createElement('h2')
        tagNome.classList.add('nome-produto')
    let tagDescription      = document.createElement('h4')
        tagDescription.classList.add('descricao-produto')
    let tagPreco            = document.createElement('p')
        tagPreco.classList.add('preco-produto')
    let tagBtn              = document.createElement('button')
        tagBtn.classList.add('botao-produto')

    tagImg.src                  = imagem
    tagNome.innerText           = nome
    tagTag.innerText            = itemTag
    tagPreco.innerText          = preco
    tagDescription.innerText    = description
    tagBtn.innerText            = 'Adicionar ao carrinho'

    
    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagTag)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagDescription)
    tagLi.appendChild(tagPreco)
    tagLi.appendChild(tagBtn)

    return tagLi
}