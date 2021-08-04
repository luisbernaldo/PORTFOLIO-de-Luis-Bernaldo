'use strict'
const workmg = document.querySelectorAll('.workmg')


//efectoscroll .moviles
let efectoScroll = (elemento) => {
    window.addEventListener('scroll', () => {
        let altura = window.innerHeight
        let distancia = workmg.offsetTop
        let pixel = window.scrollY
        if (pixel >= elemento.offsetTop - (altura / 1.5))
            elemento.classList.add('activo')
        else {
            elemento.classList.remove('activo')
        }
    })
}
workmg.forEach((v, i) => {
    efectoScroll(workmg[i])
})