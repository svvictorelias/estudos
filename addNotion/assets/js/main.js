const btnAddTarefa = document.querySelector('.btnAddTarefa')
const inputTexto = document.querySelector('#textoTarefa')
const ol = document.querySelector('ol')

//variavel de controle para poder editar apenas uma nota por vez
var editando = false

btnAddTarefa.addEventListener('click', function(e){
    criaTarefa()
})

function criaTarefa(){
    const textoFormatado = (inputTexto.value).trim()
    if((textoFormatado).trim() !== ''){
        li = document.createElement('li')
        spanTexto = document.createElement('span')

        spanTexto.innerHTML = textoFormatado
        li.appendChild(spanTexto)
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

function criaInputEditar(){
    inputEdit = document.createElement('input')
    btnEdit = document.createElement('button')
    inputEdit.setAttribute('class', 'editInput')
    btnEdit.setAttribute('class', 'btnEdit')
    btnEdit.innerHTML = 'Salvar'
    li.appendChild(inputEdit)
    li.appendChild(btnEdit)
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
        if(editando == false){
            x = elemento.parentElement.querySelector('span')
            const novoTextoInput = document.querySelector('.editInput')
            criaInputEditar()
            console.log(x)
            btn = elemento.parentElement.querySelector('.editarTarefa')
            console.log(editando)
            editando = true
        }else{
            alert('termine de editar')
        }  
    }
})


