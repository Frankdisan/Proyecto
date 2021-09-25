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
// Menú hamburguesa

// La idea a lo mejor no es tan acertada, pienso que en una página normal, en un sitio de reserva no te preguntaría el username porque ya estaría guardado. También hay un par de cosas que quise agregar pero no
// pude por motivo de tiempo, primero que las clases se agenden por orden de fecha, después agregar un botón de borrar clase, pagar y que no se puedan agendar mas de x clases.
let inputs= document.getElementsByClassName("input")
let agendaBoton= document.getElementById("agenda-boton")
agendaBoton.addEventListener("click", e=>{
    e.preventDefault()  
    if(inputs[0].value !="" && inputs[1].value !="" &&inputs[2].value !="" &&inputs[3].value !="") {
        crearCajita();
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value=""
        }
    }
});

const agenda= document.getElementById("agenda")

function crearCajita(){
    const ulagenda= document.createElement("ul");
    const liHijo= document.createElement("li");
    const liHijo1= document.createElement("li");
    const liHijo2= document.createElement("li");
    const liHijo3= document.createElement("li");
    agenda.appendChild(ulagenda);
    
    ulagenda.classList.add("ulPadre");
    liHijo.classList.add("agendaLista");
    liHijo1.classList.add("agendaLista");
    liHijo2.classList.add("agendaLista");
    liHijo3.classList.add("agendaLista");


    ulagenda.appendChild(liHijo);
    ulagenda.appendChild(liHijo1);
    ulagenda.appendChild(liHijo2);
    ulagenda.appendChild(liHijo3);

    liHijo.innerText=inputs[0].value
    liHijo1.innerText=inputs[1].value
    liHijo2.innerText=inputs[3].value
    liHijo3.innerText=inputs[4].value

}