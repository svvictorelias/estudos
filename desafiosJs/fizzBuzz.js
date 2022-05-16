//Escreva uma função que recebe um número e
//Retorne o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 e 5 = FizzBuzz
//Numero não é divisivel por 3 e 5 = Retorna o prprio número
//Use uma função com números de 0 a 100



function fizzBuzz(n){
    
    if(typeof n !== 'number'){
        return n
    }else if(n%5 === 0 && n%3 === 0){
        return 'FizzBuzz'
    }else if(n%5 === 0){
        return 'Buzz'
    }else if(n%3 === 0){
        return 'Fizz'
    }else{
        return n
    }
}

for(let i = 0; i<=100; i++){
    console.log(i, fizzBuzz(i))
}