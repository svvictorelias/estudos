function exibeHora(){
    const h2 = document.querySelector('#hora')
    const data = new Date()
    console.log(data.getDay())
    let mes
    let dia

    switch(data.getMonth()){
    case 0:
        mes = 'Janeiro'
        break
    case 1:
        mes = 'Fevereiro'
        break
    case 2:
        mes = 'Março'
        break
    case 3:
        mes = 'Abril'
        break
    case 4:
        mes = 'Maio'
        break
    case 5:
        mes = 'Junho'
        break
    case 6:
        mes = 'Julho'
        break
    case 7:
        mes = 'Agosto'
        break
    case 8:
        mes = 'Setembro'
        break
    case 9:
        mes = 'Outubro'
        break
    case 10:
        mes = 'Novembro'
        break
    case 11:
        mes = 'Dezembro'
        break
    }

    switch(data.getDay()){
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'Segunda-feira'
        break
    case 2:
        dia = 'Terça-feira'
        break
    case 3:
        dia = 'Quarta-feira'
        break
    case 4:
        dia = 'Quinta-feira'
        break
    case 5:
        dia = 'Sexta-feira'
        break
    case 6:
        dia = 'Sábado'
        break
    }
    function zeroAEsquerda(num){
        return num>=10? num : `0${num}`
    }
    const dataFormatada = (`${dia}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
    h2.innerHTML = dataFormatada
}
exibeHora()