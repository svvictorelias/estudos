//Escreva uma função que recebe 2 números e retorne o maior deles

function maior(a,b){
    if(a<b) return b
    return a
}

function maiorTernario(a,b){ return a<b ? b : a}

const max3 = (a,b) =>{ return a<b ? b : a}

const max4 = (a,b) => a<b ? b : a


console.log(maior(51,100/2))
console.log(maiorTernario(20,100/2))
console.log(max3(200,100/2))
console.log(max4(50.1,100/2))
