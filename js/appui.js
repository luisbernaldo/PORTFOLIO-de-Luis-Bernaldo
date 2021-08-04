'use strict'

const workui = document.querySelectorAll('.workui')


//efectoscroll .moviles
let efectoScroll = (elemento) => {
    window.addEventListener('scroll', () => {
        let altura = window.innerHeight
        let distancia = workui.offsetTop
        let pixel = window.scrollY
        if (pixel >= elemento.offsetTop - (altura / 1.5))
            elemento.classList.add('activo')
        else {
            elemento.classList.remove('activo')
        }
    })
}
workui.forEach((v, i) => {
    efectoScroll(workui[i])
})