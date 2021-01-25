const cero = document.getElementById("cero");
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const tabla = document.getElementById("tabla");
const espacio = document.getElementById("formulario");
const btnEmpezar = document.getElementById("btnEmpezar");
const barra = document.getElementById("barra");
var txtNivel = document.getElementById("mostrarNivel");
//const ULTIMO_NIVEL = 10//document.getElementById('niveles').value

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this);
    this.flag = 0;
    this.inicializar();
    setTimeout(this.siguienteNivel, 500);
  }

  inicializar() {
    //obtener niveles y nvieles inicial
    this.nivelInicialTxt = document.getElementById("nivelInicial");
    this.nivelInicial = parseInt(this.nivelInicialTxt.value);
    this.nivelesTxt = document.getElementById("niveles").value;
    this.niveles = parseInt(this.nivelesTxt) || this.nivelInicial + 50 || 50;
    //obtener nombre y dificultad
    this.name = document.getElementById("nombre").value;
    this.dificultad = document.getElementById("dificultad").value;
    //bindear funciones
    this.elegirColor = this.elegirColor.bind(this);
    this.siguienteNivel = this.siguienteNivel.bind(this);
    //asignar el nivel inicial al nivel actual que es por donde va a arrancar
    this.nivel = this.nivelInicial || 1;
    this.generarSecuencia();
    this.iluminar = "azul";
    this.toggleBtnEmpezar();

    this.tiempoDificultad = this.definirDificultad(this.dificultad);
    this.verificarNivelInicial();
    this.numeros = {
      cero,
      uno,
      dos,
      tres,
      cuatro,
      cinco,
      seis,
      siete,
      ocho,
    };
  }
  verificarNivelInicial() {
    if (this.nivelInicial >= this.niveles) {
      this.nivelInicialTxt.placeholder = "1";
      this.nivelInicialTxt.value = 1;
      swal(
        "Hey",
        "El nivel inical no puede ser mayor al numero de niveles seleccionados",
        "error"
      ).then(() => {
        this.eliminarEventosClick();
        this.inicializar();
      });
    }
  }
  toggleBtnEmpezar() {
    if (espacio.classList.contains("hide")) {
      espacio.classList.remove("hide");
      btnEmpezar.classList.remove("hide");
      tabla.classList.add("hide");
    } else {
      espacio.classList.add("hide");
      btnEmpezar.classList.add("hide");
      tabla.classList.remove("hide");
    }
  }
  definirDificultad(strDif) {
    switch (strDif) {
      case "facil":
        return 900;
      case "normal":
        return 700;
      case "dificil":
        return 350;
    }
  }
  generarSecuencia() {
    this.secuencia = new Array(this.niveles)
      .fill(0)
      .map((n) => Math.floor(Math.random() * 9));
  }
  siguienteNivel() {
    barra.style.width = "0%";
    if(this.nivelesTxt) {
      txtNivel.innerHTML = `Nivel ${this.nivel} de ${this.niveles}`;
    } else {
      txtNivel.innerHTML = `Nivel ${this.nivel} de ∞`;
    }
    setTimeout(() => {
      this.subnivel = 0;
      this.iluminar = "azul";
      this.eliminarEventosClick();
      this.iluminarSecuencia();
    }, 500);
  }
  transformarNumeroAString(numero) {
    switch (numero) {
      case 0:
        return "cero";
      case 1:
        return "uno";
      case 2:
        return "dos";
      case 3:
        return "tres";
      case 4:
        return "cuatro";
      case 5:
        return "cinco";
      case 6:
        return "seis";
      case 7:
        return "siete";
      case 8:
        return "ocho";
    }
  }
  transformarStringANumero(str) {
    switch (str) {
      case "cero":
        return 0;
      case "uno":
        return 1;
      case "dos":
        return 2;
      case "tres":
        return 3;
      case "cuatro":
        return 4;
      case "cinco":
        return 5;
      case "seis":
        return 6;
      case "siete":
        return 7;
      case "ocho":
        return 8;
    }
  }
  iluminarSecuencia() {
    this.tiempoDificultad = this.definirDificultad(this.dificultad);
    for (let i = 0; i < this.nivel; i++) {
      const numeroEnString = this.transformarNumeroAString(this.secuencia[i]);
      setTimeout(
        () => this.iluminarPosicion(numeroEnString),
        this.tiempoDificultad * i
      );
    }
    setTimeout(
      () => this.agregarEventosClick(),
      (this.tiempoDificultad - 100) * this.nivel
    );
  }
  iluminarPosicion(numeroEnString) {
    this.numeros[numeroEnString].classList.add(this.iluminar);
    setTimeout(
      () => this.apagarPosicion(numeroEnString),
      this.tiempoDificultad - 100
    );
  }
  apagarPosicion(numeroEnString) {
    this.numeros[numeroEnString].classList.remove(this.iluminar);
  }
  agregarEventosClick() {
    this.numeros.cero.addEventListener("click", this.elegirColor);
    this.numeros.uno.addEventListener("click", this.elegirColor);
    this.numeros.dos.addEventListener("click", this.elegirColor);
    this.numeros.tres.addEventListener("click", this.elegirColor);
    this.numeros.cuatro.addEventListener("click", this.elegirColor);
    this.numeros.cinco.addEventListener("click", this.elegirColor);
    this.numeros.seis.addEventListener("click", this.elegirColor);
    this.numeros.siete.addEventListener("click", this.elegirColor);
    this.numeros.ocho.addEventListener("click", this.elegirColor);
  }
  eliminarEventosClick() {
    this.numeros.cero.removeEventListener("click", this.elegirColor);
    this.numeros.uno.removeEventListener("click", this.elegirColor);
    this.numeros.dos.removeEventListener("click", this.elegirColor);
    this.numeros.tres.removeEventListener("click", this.elegirColor);
    this.numeros.cuatro.removeEventListener("click", this.elegirColor);
    this.numeros.cinco.removeEventListener("click", this.elegirColor);
    this.numeros.seis.removeEventListener("click", this.elegirColor);
    this.numeros.siete.removeEventListener("click", this.elegirColor);
    this.numeros.ocho.removeEventListener("click", this.elegirColor);
  }
  elegirColor(ev) {
    const strPosicion = ev.target.dataset.posicion;
    const numeroPosicion = this.transformarStringANumero(strPosicion);
    this.iluminar = "rojo";
    this.tiempoDificultad = 350;
    this.iluminarPosicion(strPosicion);
    if (numeroPosicion === this.secuencia[this.subnivel]) {
      this.subnivel++;
      this.porcentaje = 100 / this.nivel;
      this.ancho = this.porcentaje * this.subnivel;
      barra.style.width = `${this.ancho}%`;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === this.niveles + 1) {
          this.ganoElJuego();
        } else {
          setTimeout(this.siguienteNivel, 1000);
        }
      }
    } else {
      this.perdioElJuego();
    }
  }
  ganoElJuego() {
    swal(
      "HEY!",
      `Felicitaciones ${this.name} ganaste el juego`,
      "success"
    ).then(this.inicializar);
  }
  perdioElJuego() {
    swal(
      "Ups!", 
      `Lo lamento ${this.name} perdiste en el nivel ${this.nivel}`, 
      "error"
      ).then(() => {
      this.eliminarEventosClick();
      this.inicializar();
    });
  }
}

function empezarJuego() {
  juego = new Juego();
}

btnEmpezar.addEventListener("click", empezarJuego);
