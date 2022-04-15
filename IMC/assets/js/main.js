const form = document.querySelector('#form')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', resetavalor)


function resetavalor(evento){
    //foi adicionado preventDefault para que a pagina não recarregue
    evento.preventDefault()

    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const inputPeso = validaPeso(peso)
    const inputAltura = validaAltura(altura)

    function triagem(inputPeso, inputAltura){
        if(inputPeso==true && inputAltura==true){
            imc = calculaImc(peso, altura)
            grauIMC = classificacao(imc)
            resultado.innerHTML = `Seu IMC é de ${imc} (${grauIMC})`
            resultado.style.backgroundColor = 'rgb(93, 204, 230)'
        }
    }

    triagem(inputPeso, inputAltura)
    
}


function validaPeso(peso){
    if(Number(peso)){
        return true
    }else if(peso.length==0){
        resultado.innerHTML = `Preencha o campo Peso`
        resultado.style.backgroundColor = 'red'
        return false
    }
    else{
        resultado.innerHTML = `${this.peso.value} não é um peso valido`
        resultado.style.backgroundColor = 'red'
        return false
    }
}

function validaAltura(altura){
    if(Number(altura)){
        return true
    }else if(altura.length==0){
        resultado.innerHTML = `Preencha o campo Altura`
        resultado.style.backgroundColor = 'red'
        return false
    }else{
        resultado.innerHTML = `${this.altura.value} não é uma altura valido`
        resultado.style.backgroundColor = 'red'
        return false
    }
}

function calculaImc(peso, altura){
    imc = (peso/(altura**2)).toFixed(2)
    return imc
}

function classificacao(imc){
    if(imc<18.5){
        return 'Abaixo do peso'
    }else if(imc<24.9){
        return 'Peso normal'
    }else if(imc<29.9){
        return 'Sobrepeso'
    }else if(imc<34.9){
        return 'Obesidade grau 1'
    }else if(imc<39.9){
        return 'Obesidade grau 2'
    }else{
        return 'Obesidade grau 3'
    }
}