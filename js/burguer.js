const menu = document.querySelector(".divi")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)