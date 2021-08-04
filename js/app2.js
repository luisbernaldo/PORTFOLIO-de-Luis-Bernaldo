'use strict'
const moviles = document.querySelectorAll('.moviles')


//efectoscroll .moviles
let efectoScroll = (elemento) => {
    window.addEventListener('scroll', () => {
        let altura = window.innerHeight
        let distancia = moviles.offsetTop
        let pixel = window.scrollY
        if (pixel >= elemento.offsetTop - (altura / 1.5))
            elemento.classList.add('activo')
        else {
            elemento.classList.remove('activo')
        }
    })
}
moviles.forEach((v, i) => {
    efectoScroll(moviles[i])
})
