'use strict'
'use strict'
const work = document.querySelectorAll('.work')


//efectoscroll .work
let efectoScroll = (elemento) => {
    window.addEventListener('scroll', () => {
        let altura = window.innerHeight
        let distancia = work.offsetTop
        let pixel = window.scrollY
        if (pixel >= elemento.offsetTop - (altura / 1.5))
            elemento.classList.add('activo')
        else {
            elemento.classList.remove('activo')
        }
    })
}
work.forEach((v, i) => {
    efectoScroll(work[i])
})

//SLIDER
/* let foto = 0
let automatico
const slider  = document.querySelector('.slider')
const grande  =  document.querySelector('.grande')
const left    =  document.querySelector('.left')
const right   =  document.querySelector('.right')
const puntos  =  document.querySelectorAll('.punto')
const imgs    =  document.querySelectorAll('.img')


const numImgs = imgs.length

 grande.style.width = `${ numImgs * 100 }%` 

imgs.forEach(( v , i )=>{
  imgs[i].style.width = `${ 100 / numImgs}%`
})

let mostrarFoto = () => {
  grande.style.transform = `translateX(${ foto * -(100/numImgs) }%)`
  puntos.forEach((v,i)=>{
    puntos[i].classList.remove('activo')
  })
  puntos[foto].classList.add('activo')
}

let siguiente = () => {
  foto++
  if( foto >= numImgs ){ foto = 0 }
  mostrarFoto()
}


right.addEventListener('click', siguiente )


 left.addEventListener('click',()=>{
  foto--
  if( foto < 0 ){
    foto = numImgs -1
  }
  mostrarFoto()
})

puntos.forEach((v,i)=>{
  puntos[i].addEventListener('click',()=>{
    foto = i
    mostrarFoto()

  })
}) 

 */