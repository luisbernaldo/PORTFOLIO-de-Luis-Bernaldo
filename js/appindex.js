'unse strict'
const border = document.querySelector('.border')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const desplegable = document.querySelector('.desplegable')
const li = document.querySelectorAll('.desplegable .menu .li')


border.addEventListener('click', () => {
    border.classList.toggle('activo')
    one.classList.toggle('activo')
    two.classList.toggle('activo')
    three.classList.toggle('activo')
    desplegable.classList.toggle('activo')
})
