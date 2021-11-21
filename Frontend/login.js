const button = document.getElementById("ingreseBoton");
const usernameElement = document.getElementById("ingreseUsername");
const passwordElement = document.getElementById("ingresePassword");

const loginLPassword= document.getElementById("loginLPassword");
const loginLUsername= document.getElementById("loginLUsername");
const ingreseForm= document.getElementById("ingreseForm")

usernameElement.addEventListener("click", e=>{
    loginLUsername.classList.add('animacion-registro');
});

usernameElement.addEventListener("blur", e=>{
    if (usernameElement.value.trim() == "") {
        loginLUsername.classList.remove('animacion-registro');
    }   
});

passwordElement.addEventListener("click", e=>{
    loginLPassword.classList.add('animacion-registro');
});

passwordElement.addEventListener("blur", e=>{
    if (passwordElement.value.trim() == "") {
        loginLPassword.classList.remove('animacion-registro');
    }   
});

usernameElement.addEventListener("keydown", e=> {
    if(e.keyCode == 9){
        loginLPassword.classList.add('animacion-registro');
    }
});

// Backend...
ingreseForm.addEventListener('submit', e=>{
    e.preventDefault();
});

button.addEventListener("click", () => {

   const username = usernameElement.value;
    const password = passwordElement.value;

    if (username && password) {
      const objetoBody = {
        username: username,
        password: password,
      };

    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoBody),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {

        if (!response.error) {
            localStorage.setItem("token", response.token);
            usernameElement.value=""
            passwordElement.value=""
            loginLUsername.classList.remove('animacion-registro');
            loginLPassword.classList.remove('animacion-registro');
            alert("Logeado con éxito :D")
        } else {
          console.log("Login fallido");
        } 
      });
     } else {
    console.log("Falta completar campos");
  }

});


const olvidoContra= document.getElementById("email");
const olvidoContraBoton= document.getElementById("submitEspecial")


olvidoContraBoton.addEventListener("click", () => {

  const mail = olvidoContra.value;

   if (mail) {
   fetch("http://localhost:4000/auth/send-mail", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
   })
     .then(function (response) {
       return response.json();
     })
     .then(function (response) {

       if (!response.error) {
        console.log("se envio?")
       } else {
         console.log("Login fallido");
       } 
     });
    } else {
   console.log("Falta completar campos");
 }

});
