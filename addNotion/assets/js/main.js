const btnAddTarefa = document.querySelector('.btnAddTarefa')
const inputTexto = document.querySelector('#textoTarefa')
const ol = document.querySelector('ol')

btnAddTarefa.addEventListener('click', function(e){
    criaTarefa()
})

function criaTarefa(){
    const textoFormatado = (inputTexto.value).trim()
    if((textoFormatado).trim() !== ''){
        li = document.createElement('li')
        li.innerHTML = textoFormatado
        ol.appendChild(li)
        criaBotaoApagar()
    }
    inputTexto.value = ''
    inputTexto.focus()
}

function criaBotaoApagar(){
    botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove()
    }
})