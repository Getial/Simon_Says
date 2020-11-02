const barra = document.getElementById("bar")
document.addEventListener("keydown", dibujar)


var teclas ={
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
}

barra.style.height = '20px'
barra.style.width = '50%'
barra.style.background = '#000'
var ancho = parseInt(barra.style.width)

function dibujar(ev) {
    if(ev.keyCode == teclas.LEFT)
    {
        ancho--
        mostrar(ancho)
    }
    if(ev.keyCode == teclas.RIGHT)
    {
        ancho++
        mostrar(ancho)
    }
}
function mostrar(ancho) {
    barra.style.width = `${ancho}%`
}