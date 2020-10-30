const formulario = document.getElementById("formulario")
const btnEmpezar = document.getElementById('btnEmpezar')
const tabla = document.getElementById('tabla')

class Juego {
    constructor () {
        console.log("entro al constructor")
        //this.inicializar()
        //this.generarSecuencia()
        this.toggleFormulario()
    }
    toggleFormulario(){
        console.log("entro al toggle")
        if(formulario.classList.contains('hide')) {
            formulario.classList.remove('hide')
            tabla.classList.add('hide')
        } else{
            formulario.classList.add('hide')
            tabla.classList.remove('hide')
        }
    }
}

function empezarJuego() {
    console.log("entro a empezar juego")
    juego = new Juego()
}

btnEmpezar.addEventListener("click", empezarJuego)