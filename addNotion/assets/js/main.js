const btnAddTarefa = document.querySelector('.btnAddTarefa')
const inputTexto = document.querySelector('#textoTarefa')

btnAddTarefa.addEventListener('click', function(e){
    criaTarefa()
})

function criaTarefa(){
    const textoFormatado = (inputTexto.value).trim()
    if((textoFormatado).trim() !== ''){
        console.log(textoFormatado)
    }
    inputTexto.value = ''
    inputTexto.focus()

}