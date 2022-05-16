const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'header', texto: 'Frase 5'},
]

const container = document.querySelector('.container')
const divPai = document.createElement('div')

for(x in elementos){
    //usando desestruturação
    let {tag} = elementos[x]
    var tagCriada = document.createElement(tag)
    //usando modo padrão
    tagCriada.innerText = elementos[x].texto
    divPai.appendChild(tagCriada)
}
container.appendChild(divPai)