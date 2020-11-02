const barra = document.getElementById("bar")
document.addEventListener("keydown", dibujar)

barra.style.height = '20px'
barra.style.width = '50%'
barra.style.background = '#000'
var ancho = parseInt(barra.style.width)

var teclas ={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}


function dibujar(ev) {
    if(ev.keyCode == teclas.LEFT)
    {
        disminuir()
    }
    if(ev.keyCode == teclas.RIGHT)
    {
        aumentar()
    }
}
function disminuir(){
    if(ancho >= 1)
        {
            ancho--
        } else {
            ancho = 0;
        }
        mostrar(ancho)
}
function aumentar(){
    if(ancho <= 99)
        {
            ancho++
        } else {
            ancho = 100;
        }
        mostrar(ancho)
}

function mostrar(ancho) {
    barra.style.width = `${ancho}%`
}