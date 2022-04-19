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
        criaBotaoEditar()
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

function criaBotaoEditar(){
    botaoEditar = document.createElement('button')
    botaoEditar.innerHTML = 'Editar'
    botaoEditar.setAttribute('class', 'editarTarefa')
    li.appendChild(botaoEditar)
}


document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove()
    }
})


//#########   A partir daqui    ############################
document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('editarTarefa')){
        editar()
    }
})

function editar(){
    const btn = document.querySelector('.editarTarefa')
    console.log(btn.parentElement)
}