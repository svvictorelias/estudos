const btnAddTarefa = document.querySelector('.btnAddTarefa')
const inputTexto = document.querySelector('#textoTarefa')
const ol = document.querySelector('ol')

//controlador de estado editando ou não
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
    divEditar = document.createElement('div')
    botaoEditar.innerHTML = 'Editar'
    botaoEditar.setAttribute('class', 'editarTarefa')
    li.appendChild(botaoEditar)
    li.appendChild(divEditar)
}

function criaInputEditar(classePai){
    inputEdit = document.createElement('input')
    inputEdit.setAttribute('class', 'editInput')
    classePai.appendChild(inputEdit)
    
    btnEdit = document.createElement('button')
    btnEdit.innerHTML = 'Salvar'
    btnEdit.setAttribute('class', 'btnEdit')
    classePai.appendChild(btnEdit)
}

document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('apagar')){
        if(editando==false){
            elemento.parentElement.remove()
        }else{
            alert('Por Favor termine de editar')
        }
    }
})

//#########   A partir daqui    ############################
document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('editarTarefa')){
        if(editando==false){ 
            div = elemento.parentElement.querySelector('div')  
            span = elemento.parentElement.querySelector('span') 
            
            criaInputEditar(div)
            editando = true
        }else{
            alert('Por Favor termine de editar')
        }
    }
})

//Ao clicar no botão Salvar(edição) ele pega o input e manda pro span do  

    document.addEventListener('click', function(e){
    const elemento = e.target
    if(elemento.classList.contains('btnEdit')){
        const editTextInput = document.querySelector('.editInput')
        const editText = (editTextInput.value).trim()
        if((editText).trim() !== ''){
            editando = false
            span.innerHTML = editText
            document.querySelector('.btnEdit').remove()
            editTextInput.remove()  
        }else{
            alert('Digite algo valido')
        }
    }
})
