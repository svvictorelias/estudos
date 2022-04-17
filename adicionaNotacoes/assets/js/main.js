const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaTarefa(texto){
    const li = document.createElement('li')
    li.innerHTML = texto
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class','apagar')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
        
    }
})

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value ) return
        criaTarefa(inputTarefa.value)
        
    }
})

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value ) return
    criaTarefa(inputTarefa.value)
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar','').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    //converte para string em formato JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    //desconverte de JSON para objeto
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()