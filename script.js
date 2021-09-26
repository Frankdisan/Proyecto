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

// Resultó que en este script se encuentra en su gran mayoría la página de registro
// Animación para los inputs del registro

let registroForm= document.getElementById("registro-form");
let registroContainer= document.getElementById("registro-container");
let registroNombre= document.getElementById("registro-nombre");
let registroApellido= document.getElementById("registro-apellido");
let registroUsername= document.getElementById("registro-username")
let registroEmail= document.getElementById("registro-email");
let registroContra= document.getElementById("registro-contra");
let registroRepContra= document.getElementById("registro-repetir-contra");

let lnombre= document.getElementById("lnombre");
let lapellido= document.getElementById("lapellido");
let lusername= document.getElementById("lusername");
let lemail= document.getElementById("lemail");
let lcontra= document.getElementById("lcontra");
let lcontra2= document.getElementById("lcontra2");


registroNombre.addEventListener("click", e=>{
    lnombre.classList.add('animacion-registro');
});

registroNombre.addEventListener("blur", e=>{
    if (registroNombre.value.trim() == "") {
        lnombre.classList.remove('animacion-registro');
    }   
});

registroNombre.addEventListener("keydown", e=> {
    if(e.keyCode == 9){                            // No estoy muy seguro de por qué tacha el keycode, lo dejé así porque funciona bien y no aparece ningún error en la consola.
        lapellido.classList.add('animacion-registro');
    }
});
 
registroApellido.addEventListener("click", e=>{
    lapellido.classList.add('animacion-registro');
});

registroApellido.addEventListener("blur", e=>{
    if (registroApellido.value.trim() == "") {
        lapellido.classList.remove('animacion-registro');
    }   
});

registroApellido.addEventListener('keydown', e=> {
    if(e.keyCode == 9){      
        lusername.classList.add('animacion-registro');
    }
});

registroUsername.addEventListener("click", e=>{
    lusername.classList.add('animacion-registro');
});

registroUsername.addEventListener("blur", e=>{
    if (registroUsername.value.trim() == "") {
        lusername.classList.remove('animacion-registro');
    }   
});

registroUsername.addEventListener('keydown', e=> {
    if(e.keyCode == 9){      
        lemail.classList.add('animacion-registro');
    }
});

registroEmail.addEventListener("click", e=>{
    lemail.classList.add('animacion-registro');
});

registroEmail.addEventListener("blur", e=>{
    if (registroEmail.value.trim() == "") {
        lemail.classList.remove('animacion-registro');
    }   
});

registroEmail.addEventListener('keydown', e=> {
    if(e.keyCode == 9){      
        lcontra.classList.add('animacion-registro');
    }
});

registroContra.addEventListener("click", e=>{
    lcontra.classList.add('animacion-registro');
});

registroContra.addEventListener("blur", e=>{
    if (registroContra.value.trim() == "") {
        lcontra.classList.remove('animacion-registro');
    }   
});

registroContra.addEventListener('keydown', e=> {
    if(e.keyCode == 9){      
        lcontra2.classList.add('animacion-registro');
    }
});

registroRepContra.addEventListener("click", e=>{
    lcontra2.classList.add('animacion-registro');
});

registroRepContra.addEventListener("blur", e=>{
    if (registroRepContra.value.trim() == "") {
        lcontra2.classList.remove('animacion-registro');
    }   
});


// Validación de los inputs

function tienenumero(x) {
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
const texterror= document.querySelectorAll("small");
let i = 0;


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
    } else if (nombre.length < 3){
        i=0;
        error(registroNombre, "El mínimo son 3 caracteres");
    } else if (nombre.length > 30){
        i=0;
        error(registroNombre, "El máximo son 30 caracteres");
    } else {
        i=0;
        correcto(registroNombre, "");
        nombreC= true; 
    }
        
    if (apellido === ''){
        i=1;
        error(registroApellido, "Ingrese su apellido");
    } else if (apellido.length < 3){
        i=1;
        error(registroApellido, "El mínimo son 3 caracteres");
    } else if (apellido.length >= 30){
        i=1;
        error(registroApellido, "El máximo son 30 caracteres");
    } else {
        i=1;
        correcto(registroApellido, "");
        apellidoC= true;
    }

    if (username === ''){
        i=2;
        error(registroUsername, "Ingrese su username");
    } else if (username.length <5){
        i=2;
        error(registroUsername, "Su username debe tener al menos 5 caracteres ");
    } else if (username.length >= 30){
        i=2;
        error(registroUsername, "El máximo son 30 caracteres");
    } else if (tienenumero(username) == false ){
        i=2;
        error(registroUsername, "Su username debe contener un número");  
    } else if (tienemayuscula(username) == false){
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
    } else if (validarMail(mail)==false){
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
    } else if (tienenumero(contra) == false ){
        i=4;
        error(registroContra, "Su contraseña debe contener al menos un número")
    } else if (tienemayuscula(contra) == false ){
        i=4;
        error(registroContra, "Su contraseña debe contener al menos una mayúscula")
    } else {
        i=4;
        correcto(registroContra, "");
        contraC= true;
    }

    if (contra ===""){
        i=5;
        error(registroRepContra, "");
    } else if (contra2 === ''){
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
        contra2C= true;    
    }

    if (nombreC=== true && apellidoC===true && usernameC===true && mailC===true && contraC=== true && contra2C===true){
        registrarse();
    }
}

// Blur  (Traté de abreviar un poco el código aprovechando la función checkInputs, pero solamente lo logré escribiendo toda esa seccion de código nuevamente, lo mismo en el anterior ítem de animación de los inputs,
// aún así, espero que te guste, fue la sección que más dediqué tiempo e investigué.)

registroNombre.addEventListener('blur', e=>{
    e.preventDefault();
    nombreBlur()
});

function nombreBlur() {
    const nombre= registroNombre.value.trim();

    if (registroNombre.value === ''){
        i=0
      vacio(registroNombre, "")
    } else if (nombre.length < 3){
        i=0;
        error(registroNombre, "El mínimo son 3 caracteres");
    } else if (nombre.length > 30){
        i=0;
        error(registroNombre, "El máximo son 30 caracteres");
    } else {
        i=0;
        correcto(registroNombre, "");
    }
};


registroApellido.addEventListener('blur', e=>{
    e.preventDefault();
    Apellidoblur()
});

function Apellidoblur() {
    const apellido= registroApellido.value.trim();

    if (apellido === ''){
        i=1
        vacio(registroApellido, "");
    } else if (apellido.length < 3){
        i=1;
        error(registroApellido, "El mínimo son 3 caracteres");
    } else if (apellido.length >= 30){
        i=1;
        error(registroApellido, "El máximo son 30 caracteres");
    } else {
        i=1;
        correcto(registroApellido, "");
    }
};


registroUsername.addEventListener('blur', e=>{
    e.preventDefault();
    usernameBlur()
});

function usernameBlur() {
    const username= registroUsername.value.trim();

    if (username === ''){
        i=2;
        vacio(registroUsername, "");
    } else if (username.length <5){
        i=2;
        error(registroUsername, "Su username debe tener al menos 5 caracteres ");
    } else if (username.length >= 30){
        i=2;
        error(registroUsername, "El máximo son 30 caracteres");
    } else if (tienenumero(username) == false ){
        i=2;
        error(registroUsername, "Su username debe contener un número");  
    } else if (tienemayuscula(username) == false){
        i=2;
        error(registroUsername, "Su username debe contener mayúsculas");
    } else {
        i=2;
        correcto(registroUsername, "");
    }
};


registroEmail.addEventListener('blur', e=>{
    e.preventDefault();
    mailBlur()
});

function mailBlur() {
    const mail= registroEmail.value.trim();

    if (mail === ''){
        i=3;        
        vacio(registroEmail, "");
    } else if (validarMail(mail)==false){
        i=3;
        error(registroEmail, "Ingrese un correo electrónico válido");
    } else {
        i=3;
        correcto(registroEmail, "");
    }
};


registroContra.addEventListener('blur', e=>{
    e.preventDefault();
    contraBlur()
});

function contraBlur() {
    const contra= registroContra.value.trim();
    let contraC= false
    if (contra === ''){
        i=4; 
        vacio(registroContra, "");
    } else if (contra.length < 7){
        i=4;
        error(registroContra, "Su contraseña no puede tener menos de 7 caracteres");  
    } else if (contra.length > 30){
        i=4;
        error(registroContra, "Su contraseña no puede tener más de 20 caracteres");
    } else if (tienenumero(contra) == false ){
        i=4;
        error(registroContra, "Su contraseña debe contener al menos un número")
    } else if (tienemayuscula(contra) == false ){
        i=4;
        error(registroContra, "Su contraseña debe contener al menos una mayúscula")
    } else {
        i=4;
        correcto(registroContra, "");
        contraC= true
    }

    registroRepContra.addEventListener('blur', e=>{
    e.preventDefault();
    const contra2= registroRepContra.value.trim();

    if (contra === ""){
        i=5;
        vacio(registroRepContra, "");
    } else if (contra2 === ''){
        i=5;
        error(registroRepContra, "Repita su contraseña");
    } else if (contraC === false){
        i=5;
        error(registroRepContra, "");
    } else if (contra2 != contra){
        i=5;
        error(registroRepContra, "Sus contraseñas no coinciden");
    } else {
        i=5;
        correcto(registroRepContra, "");
    }}); 
};


function vacio(input, message) {
    const inputCorrecto= document.querySelectorAll('input');
    const mensaje= registroForm.querySelectorAll('small');
    const inputError= document.querySelectorAll('input');
    inputError[i].classList.remove("inputError");
    mensaje[i].innerText= message;
    inputCorrecto[i].classList.remove("inputCorrecto");
    right[i].classList.remove("rightT")
    wrong[i].classList.remove("wrongT")
};

function error(input, message) {
    const inputCorrecto= document.querySelectorAll('input');
    const inputError= document.querySelectorAll('input');
    const mensaje= registroForm.querySelectorAll('small');
    mensaje[i].innerText= message;
    inputError[i].classList.add("inputError");
    texterror[i].classList.add("small-error")
    wrong[i].classList.add("wrongT")
    right[i].classList.remove("rightT")
    inputCorrecto[i].classList.remove("inputCorrecto")
};

function correcto(input, message) {
    const inputCorrecto= document.querySelectorAll('input');
    const mensaje= registroForm.querySelectorAll('small');
    mensaje[i].innerText= message;
    inputCorrecto[i].classList.add("inputCorrecto");
    right[i].classList.add("rightT")
    wrong[i].classList.remove("wrongT")
};

function registrarse() {
     registroForm.submit()
};
