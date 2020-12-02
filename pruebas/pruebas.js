const barra = document.getElementById("bar")
const btnDetener = document.getElementById("detener")
btnDetener.addEventListener("click", togglePlay)
//document.addEventListener("keydown", dibujar)

barra.style.height = '20px'
barra.style.width = '100%'
barra.style.background = '#000'
var ancho = parseInt(barra.style.width)
var intervaloDisminuir
var intervaloAumentar
var run

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
    run = 1
    if(ancho >= 1)
        {
            ancho--
        } else {
            clearInterval(intervaloDisminuir)
            ancho = 0;
            intervaloAumentar = setInterval(aumentar, 10)
        }
        mostrar(ancho)
}
function aumentar(){
    run = 2
    if(ancho <= 99)
        {
            ancho++
        } else {
            clearInterval(intervaloAumentar)
            ancho = 100;
            intervaloDisminuir = setInterval(disminuir, 10)
        }
        mostrar(ancho)
}

function mostrar(ancho) {
    barra.style.width = `${ancho}%`
}
function togglePlay(){
    if(run === 1)
    {
        clearInterval(intervaloDisminuir)
        run = 3;
    }else if(run === 2){
        clearInterval(intervaloAumentar)
        run = 4;
    }else if(run === 3){
        intervaloDisminuir = setInterval(disminuir, 100)
    }else if(run ===4){
        intervaloAumentar = setInterval(aumentar, 10)
    }
}

intervaloDisminuir = setInterval(disminuir, 100)