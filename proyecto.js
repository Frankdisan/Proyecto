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

let registroForm= document.getElementById("registro-form");
let registroContainer= document.getElementById("registro-container");
let registroNombre= document.getElementById("registro-nombre");
let registroApellido= document.getElementById("registro-apellido");
let registroUsername= document.getElementById("registro-username")
let registroEmail= document.getElementById("registro-email");
let registroContra= document.getElementById("registro-contra");
let registroRepContra= document.getElementById("registro-repetir-contra");


let lnombre= document.getElementById("lnombre")
let lapellido= document.getElementById("lapellido")
let lusername= document.getElementById("lusername")
let lemail= document.getElementById("lemail")
let lcontra= document.getElementById("lcontra")
let lcontra2= document.getElementById("lcontra2")




registroNombre.addEventListener ("click", e=>{
    lnombre.classList.add('animacion-registro');
});

registroNombre.addEventListener("blur", e=>{
    if (registroNombre.value.trim() == "") {
        lnombre.classList.remove('animacion-registro');
    }   
});


registroApellido.addEventListener ("click", e=>{
    lapellido.classList.add('animacion-registro');
});

registroApellido.addEventListener("blur", e=>{
    if (registroApellido.value.trim() == "") {
        lapellido.classList.remove('animacion-registro');
    }   
});


registroUsername.addEventListener ("click", e=>{
    lusername.classList.add('animacion-registro');
});

registroUsername.addEventListener("blur", e=>{
    if (registroUsername.value.trim() == "") {
        lusername.classList.remove('animacion-registro');
    }   
});


registroEmail.addEventListener ("click", e=>{
    lemail.classList.add('animacion-registro');
});

registroEmail.addEventListener("blur", e=>{
    if (registroEmail.value.trim() == "") {
        lemail.classList.remove('animacion-registro');
    }   
});


registroContra.addEventListener ("click", e=>{
    lcontra.classList.add('animacion-registro');
});

registroContra.addEventListener("blur", e=>{
    if (registroContra.value.trim() == "") {
        lcontra.classList.remove('animacion-registro');
    }   
});


registroRepContra.addEventListener ("click", e=>{
    lcontra2.classList.add('animacion-registro');
});

registroRepContra.addEventListener("blur", e=>{
    if (registroRepContra.value.trim() == "") {
        lcontra2.classList.remove('animacion-registro');
    }   
});


// Validación


function tienenumero (x) {
    return /\d/.test(x);
}

function tienemayuscula(str) {
    return  /[A-Z]/. test(str);
}

function validarMail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const right= document.getElementsByClassName("right");
const wrong= document.getElementsByClassName("wrong");
let i = 0
const texterror= document.querySelectorAll("small")

registroForm.addEventListener('submit', e=>{
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nombre= registroNombre.value.trim();
    const apellido= registroApellido.value.trim();
    const username= registroUsername.value.trim();
    const mail= registroEmail.value.trim();
    const contra= registroContra.value.trim();
    const contra2= registroRepContra.value.trim();
    let nombreC = false;
    let apellidoC =false;
    let usernameC =false;
    let mailC =false;
    let contraC=false;
    let contra2C=false;

    if (nombre === ''){
        i=0;
        error(registroNombre, "Ingrese su nombre");
        
    } else if (nombre.length < 3) {
        i=0;
        error(registroNombre, "El mínimo son 3 caracteres");
    } else if (nombre.length > 30){
        i=0;
        error(registroNombre, "El máximo son 30 caracteres");
    } else {
        i=0;
        correcto(registroNombre, "");
        nombreC=true 

    }

    if (apellido === ''){
        i=1;
        error(registroApellido, "Ingrese su apellido");
    } else if (apellido.length < 3) {
        i=1;
        error(registroApellido, "El mínimo son 3 caracteres");
    } else if (apellido.length >= 30){
        i=1;
        error(registroApellido, "El máximo son 30 caracteres");
        
    } else {
        i=1;
        correcto(registroApellido, "");
        apellidoC=true
        
    }

    if (username === ''){
        i=2;
        error(registroUsername, "Ingrese su username");
    } else if (username.length <5){
        i=2;
        error(registroUsername, "Su username debe tener al menos 5 caracteres ");
    }    else if (username.length >= 30){
        i=2;
        error(registroUsername, "El máximo son 30 caracteres");
    }  else if (tienenumero(username) == false ) {
        i=2;
        error(registroUsername, "Su username debe contener un número");  
    } else if (tienemayuscula(username) == false) {
        i=2;
        error(registroUsername, "Su username debe contener mayúsculas");
    } else {
        i=2;
        correcto(registroUsername, "");
        usernameC = true;
    }

    if (mail === ''){
        i=3;        
        error(registroEmail, "Ingrese su correo electrónico");
        
    }   else if (validarMail(mail)==false){
        i=3;
        error(registroEmail, "Ingrese un correo electrónico válido");
        
    } else {
        i=3;
        correcto(registroEmail, "");
        mailC=true;

    }

    if (contra === ''){
        i=4;
        error(registroContra, "Ingrese una contraseña");
        
    } else if (contra.length < 7){
        i=4;
        error(registroContra, "Su contraseña no puede tener menos de 7 caracteres");  
    } else if (contra.length > 30){
        i=4;
        error(registroContra, "Su contraseña no puede tener más de 20 caracteres");
        
    } else if (tienenumero(contra) == false ) {
        i=4;
        error(registroContra, "Su contraseña debe contener al menos un número")
    }  else if (tienemayuscula(contra) == false ) {
        i=4;
        error(registroContra, "Su contraseña debe contener al menos una mayúscula")
    } else {
        i=4;
        correcto(registroContra, "");
        contraC=true;
    }

    if (contra ==="") {
        i=5;
        error(registroRepContra, "Debe llenar el campo anterior primero");
        
        
    }  else if (contra2 === ''){
        i=5;
        error(registroRepContra, "Repita su contraseña");

    } else if (contraC==false){
        i=5;
        error(registroRepContra, "");
    } else if (contra2 != contra){
        i=5;
        error(registroRepContra, "Sus contraseñas no coinciden");
        
    } else {
        i=5;
        correcto(registroRepContra, "");
        contra2C=true;    
    }
    if (nombreC=== true && apellidoC===true && usernameC===true && mailC===true && contraC=== true && contra2C===true){
        registrarse();
    }
}


function error (input, message) {
    const inputCorrecto= document.querySelectorAll('input');
    const inputError= document.querySelectorAll('input');
    const mensaje= registroForm.querySelectorAll('small');
    mensaje[i].innerText= message;
    inputError[i].classList.add("inputError");
    texterror[i].classList.add("small-error")
    wrong[i].classList.add("wrongT")
    right[i].classList.remove("rightT")
    inputCorrecto[i].classList.remove("inputCorrecto")

}

function correcto(input, message) {
    const inputCorrecto= document.querySelectorAll('input');
    const mensaje= registroForm.querySelectorAll('small');
    mensaje[i].innerText= message;
    inputCorrecto[i].classList.add("inputCorrecto");
    right[i].classList.add("rightT")
    wrong[i].classList.remove("wrongT")
}

function registrarse() {
     registroForm.submit()
}
