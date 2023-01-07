const menu = document.querySelector(".divi")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)

function mudar(){
    location.replace("./index1.html", "_self")
}

function mudar1(){
    location.replace("./index.html", "_self")
}

function voltar(){
    location.replace("./projeto.html", "_self")
}
