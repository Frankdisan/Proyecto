// Menú hamburguesa
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


// Para hacer la calculadora seguí un tutorial, luego le agregué la opción de poder utilizarla con el teclado.
// todavía hay algunas cosas que me gustaría agregarle, sería genial que el resultado final pueda ser como una calculadora científica.

class Calculadora{
    constructor(operacionPreviaTexto, operacionActualTexto){
        this.operacionPreviaTexto= operacionPreviaTexto;
        this.operacionActualTexto= operacionActualTexto;
        this.borrarTodo();
    }

    borrarTodo() {
        this.operacionPrevia= ""
        this.operacionActual= ""
        this.operacion= undefined;
    }

    borrar() {
        this.operacionActual= this.operacionActual.toString().slice(0, -1)
    }

    appendNumero(numero) {
        if(numero === "." && this.operacionActual.includes('.')) return
        this.operacionActual= this.operacionActual.toString() + numero.toString()
    }

    elegirOperacion(operacion) {
        if (this.operacionActual==="") return
        if (this.operacionPrevia !== "") {
            this.calcular();
        }
        this.operacion = operacion;
        this.operacionPrevia= this.operacionActual;
        this.operacionActual= ""
    }

    calcular() {
        let calculo
        const previa= parseFloat(this.operacionPrevia);
        const actual= parseFloat(this.operacionActual);
        if (isNaN(previa) || isNaN(actual)) return
        switch (this.operacion) {
            case '+':
                calculo= previa + actual
                break
            case '-':
                calculo= previa - actual
                break
            case '÷':
                calculo= previa / actual
                break
            case '×':
                calculo= previa * actual
                break
            default:
                return
        }
        this.operacionActual= calculo;
        this.operacion= undefined;
        this.operacionPrevia= ''
    }

    numeroDisplay(numero){
        const stringNumero= numero.toString();
        const integerDigito= parseFloat(stringNumero.split(".")[0]);
        const decimalDigito= stringNumero.split(".")[1];
        let integerDisplay
        if(isNaN(integerDigito)) {
            integerDisplay= ''
        } else {
            integerDisplay= integerDigito.toLocaleString("es", {maximumFractionDigits:0})
        }
        if (decimalDigito !=null) {
            return `${integerDisplay}.${decimalDigito}`
        } else {
            return integerDisplay
        }

    }

    actualizar() {
        this.operacionActualTexto.innerText= this.numeroDisplay(this.operacionActual)
        if (this.operacion != null) {
            this.operacionPreviaTexto.innerText=
            `${this.numeroDisplay(this.operacionPrevia)} ${this.operacion}`
        } else {
            this.operacionPreviaTexto.innerText=""
        }
    }
}


const botonNumero= document.querySelectorAll("[data-numero]");
const botonOperacion= document.querySelectorAll("[data-operacion]");
const botonIgual= document.querySelector("[data-igual]");
const botonBorrar= document.querySelector("[data-borrar]");
const botonBorrarTodo= document.querySelector("[data-borrar-todo]");
const operacionPreviaTexto= document.querySelector("[data-operacion-previa]");
const operacionActualTexto= document.querySelector("[data-operacion-actual]");

const calculadora= new Calculadora(operacionPreviaTexto, operacionActualTexto);

botonNumero.forEach(button => {
    button.addEventListener("click", () =>{
        calculadora.appendNumero(button.innerText);
        calculadora.actualizar()
    });
});

botonOperacion.forEach(button => {
    button.addEventListener("click", () =>{
        calculadora.elegirOperacion(button.innerText);
        calculadora.actualizar()
    });
});

botonIgual.addEventListener("click", button=>{
    calculadora.calcular();
    calculadora.actualizar();
});

botonBorrarTodo.addEventListener("click", button=>{
    calculadora.borrarTodo();
    calculadora.actualizar();
});

botonBorrar.addEventListener("click", button=>{
    calculadora.borrar();
    calculadora.actualizar();
});


// Teclado


const body= document.getElementsByTagName("body");

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 57 || e.keyCode == 105){      
        calculadora.appendNumero(9);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 56 || e.keyCode == 104){      
        calculadora.appendNumero(8);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 55 || e.keyCode == 103){      
        calculadora.appendNumero(7);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 54 || e.keyCode == 102){      
        calculadora.appendNumero(6);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 53 || e.keyCode == 101){      
        calculadora.appendNumero(5);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 52 || e.keyCode == 100){      
        calculadora.appendNumero(4);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 51 || e.keyCode == 99){      
        calculadora.appendNumero(3);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 50 || e.keyCode == 98){      
        calculadora.appendNumero(2);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 49 || e.keyCode == 97){
        calculadora.appendNumero(1);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 48 || e.keyCode == 96){      
        calculadora.appendNumero(0);
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 110 || e.keyCode == 190){      
        calculadora.appendNumero(".");
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 107){      
        calculadora.elegirOperacion("+");
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 109){      
        calculadora.elegirOperacion("-");
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 106){      
        calculadora.elegirOperacion("×");
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 111){      
        calculadora.elegirOperacion("÷");
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 13){      
        calculadora.calcular();
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 8){     
        calculadora.borrar(); 
        calculadora.actualizar()
    }
});

body[0].addEventListener('keydown', e=> {
    if(e.keyCode == 67){      
        calculadora.borrarTodo();
        calculadora.actualizar()
    }
});






