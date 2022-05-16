const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')
const estilosBody = getComputedStyle(document.body)
const bgBody = estilosBody.backgroundColor
for(p of ps){
    p.style.backgroundColor = bgBody
    p.style.color = 'white'
    console.log(p)
}