const form = document.querySelector('#form')

form.addEventListener('submit', resetavalor)

//foi adicionado preventDefault para que a pagina não recarregue
function resetavalor(evento){
    evento.preventDefault()
}