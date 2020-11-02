const barra = document.getElementById("bar")
const btnDetener = document.getElementById("detener")
btnDetener.addEventListener("click", detener)
//document.addEventListener("keydown", dibujar)

barra.style.height = '20px'
barra.style.width = '100%'
barra.style.background = '#000'
var ancho = parseInt(barra.style.width)
var intervaloDisminuir
var intervaloAumentar

// var teclas ={
//     UP:38,
//     DOWN:40,
//     LEFT:37,
//     RIGHT:39
// }

// function dibujar(ev) {
//     if(ev.keyCode == teclas.LEFT)
//     {
//         disminuir()
//     }
//     if(ev.keyCode == teclas.RIGHT)
//     {
//         aumentar()
//     }
// }
function disminuir(){
    if(ancho >= 1)
        {
            ancho--
        } else {
            clearInterval(intervaloDisminuir)
            intervaloAumentar = setInterval(aumentar, 100)
            ancho = 0;
        }
        mostrar(ancho)
}
function aumentar(){
    if(ancho <= 99)
        {
            ancho++
        } else {
            clearInterval(intervaloAumentar)
            intervaloDisminuir = setInterval(disminuir, 100)
            ancho = 100;
        }
        mostrar(ancho)
}

function mostrar(ancho) {
    barra.style.width = `${ancho}%`
}
function detener(){
    clearInterval(intervaloAumentar)
    clearInterval(intervaloDisminuir)
}

intervaloDisminuir = setInterval(disminuir, 100)