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


// Agenda
// Todavía no estoy conforme del todo con esta págin, tiene un par de detalles más técnicos, como que al agendar una clase no te deje agendar otra hasta la siguiente hora (o sea, si agendo una clase a las 10:00, no pueda 
// agendar otra a las 10:05), que se queden ordenadas según la fecha, y luego el tema de los pagos, que haya descuentos, etc. Todas estas cosas no tengo tiempo de agregarlas en esta entrega, pero las corregiré para la segunda.


let inputs= document.getElementsByClassName("input");
let agendaBoton= document.getElementById("agenda-boton");
agendaBoton.addEventListener("click", e=>{
    e.preventDefault();  
    if(inputs[0].value !="" && inputs[1].value !="" &&inputs[2].value !="" &&inputs[3].value !="") {
        crearCajita();
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value=""
        }
    }
});

const agenda= document.getElementById("agenda");

function crearCajita(){
    const ulagenda= document.createElement("ul");
    const liHijo= document.createElement("li");
    const liHijo1= document.createElement("li");
    const liHijo2= document.createElement("li");
    const liHijo3= document.createElement("li");
    const liHijo4= document.createElement("li");
    const cruz= document.createElement("a");
    agenda.appendChild(ulagenda);
    
    ulagenda.classList.add("ulPadre");
    liHijo.classList.add("agendaLista");
    liHijo1.classList.add("agendaLista");
    liHijo2.classList.add("agendaLista");
    liHijo3.classList.add("agendaLista");
    liHijo4.classList.add("agendaLista", "liCruz");


    ulagenda.appendChild(liHijo);
    ulagenda.appendChild(liHijo1);
    ulagenda.appendChild(liHijo2);
    ulagenda.appendChild(liHijo3);
    ulagenda.appendChild(liHijo4);


    liHijo.innerText=inputs[0].value
    liHijo1.innerText=inputs[1].value
    liHijo2.innerText=inputs[3].value
    liHijo3.innerText=inputs[4].value
    
    liHijo4.appendChild(cruz)
    cruz.innerHTML= "&times;"
    cruz.classList.add("cruz");   


    cruz.addEventListener("click", e=>{
        ulagenda.removeChild(liHijo);
        ulagenda.removeChild(liHijo1);
        ulagenda.removeChild(liHijo2);
        ulagenda.removeChild(liHijo3);
        ulagenda.removeChild(liHijo4);

    });
};