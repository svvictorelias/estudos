//Escreva uma função chamada ePaisagem que recebe dois argumentos, 
//largura e altura de uma imagem(number). 
//Retorne true se a imagem estiver em modo paisagem(largura>altura)

const ePaisagem = (largura, altura) => largura>altura
console.log(ePaisagem(1280, 720))
console.log(ePaisagem(1080, 1920))

