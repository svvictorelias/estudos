const form = document.querySelector('#form')


form.addEventListener('submit', resetavalor)


function resetavalor(evento){
    //foi adicionado preventDefault para que a pagina não recarregue
    evento.preventDefault()

    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    validaPeso(peso)
    imc = calculaImc(peso, altura)
    console.log(imc)

    
}

function validaPeso(peso){
    if(Number(peso)){
        alert('é número')
    }else{
        alert('n é número')
    }
}

function validaAltura(altura){
    if(Number(altura)){
        alert('é número')
    }else{
        alert('n é número')
    }
}

function calculaImc(peso, altura){
    imc = (peso/(altura**2)).toFixed(2)
    return imc
}