const clock = document.querySelector('#clock')
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')
pausar.disabled = true
zerar.disabled = true

let segundos = 0
let minutos = 0
let horas = 0

iniciar.addEventListener('click', function(e){
    iniciaRelogio()
})
pausar.addEventListener('click', function(e){
    pausaRelogio()
    
})
zerar.addEventListener('click', function(e){
    zeraRelogio()
})

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        if(segundos==60){
            segundos = 0
            minutos++
        }
        if(minutos==60){
            minutos = 0
            horas++
        }
        clock.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`
    }, 1000)
    iniciar.disabled = true
    pausar.disabled = false
    zerar.disabled = false
    clock.style.color = 'black'
    iniciar.innerHTML = 'Iniciar'
}

function pausaRelogio(){
    clearInterval(timer)
    iniciar.disabled = false
    pausar.disabled = true
    clock.style.color = 'red'
    iniciar.innerHTML = 'Continuar'

}
function zeraRelogio(){
    clearInterval(timer)
    iniciar.disabled = false
    segundos = 0
    minutos = 0
    horas = 0
    clock.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`
    clock.style.color = 'black'
    pausar.disabled = true
    zerar.disabled = true
    iniciar.innerHTML = 'Iniciar'


}

function zeroAEsquerda(num){
    return num>=10? num : `0${num}`
}