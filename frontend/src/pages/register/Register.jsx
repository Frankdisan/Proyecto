import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import wrong from "../../assets/wrong.jpg";
import checked from "../../assets/checked.png"
import "./register.css"

function Register() {  
    return (
        <>
            <Header/>
            <main id="registro-main">
                <div id="registro-container">
                    <form id="registro-form">
                        <h2>Regístrese</h2>
                        <div>
                            <input type="text" id="registro-nombre" autocomplete="off"/>
                            <label id="lnombre">Nombre</label>
                            <img className="right" src={checked} alt="Check sign" title="Check sign"/>
                            <img className="wrong" src={wrong} alt="Wrong sing" title="Wrong sign"/>
                            <small>Mensaje de error</small>
                        </div>              
                        <div>                  
                            <input type="text" id="registro-apellido" autocomplete="off"/>
                            <label id="lapellido">Apellido</label>
                            <img className="right" src={checked} alt="Check sign" title="Check sign"/>
                            <img className="wrong" src={wrong} alt="Wrong sing" title="Wrong sign"/>
                            <small>Mensaje de error</small>
                        </div>
                        <div>                  
                            <input type="text" id="registro-username" autocomplete="off"/>
                            <label id="lusername">Username</label>
                            <img className="right" src={checked} alt="Check sign" title="Check sign"/>
                            <img className="wrong" src={wrong} alt="Wrong sing" title="Wrong sign"/>
                            <small>Mensaje de error</small>
                        </div>
                        <div>                    
                            <input type="email" id="registro-email" autocomplete="off"/>
                            <label id="lemail">E-mail</label>
                            <img className="right" src={checked} alt="Check sign" title="Check sign"/>
                            <img className="wrong" src={wrong} alt="Wrong sing" title="Wrong sign"/>
                            <small>Mensaje de error</small>
                        </div>
                        <div>                    
                            <input type="password" id="registro-contra"/>
                            <label id="lcontra">Contraseña</label>
                            <img className="right" src={checked} alt="Check sign" title="Check sign"/>
                            <img className="wrong" src={wrong} alt="Wrong sing" title="Wrong sign"/>
                            <small>Mensaje de error</small>
                        </div>
                        <div id="registro-Divcontra2">                    
                            <input type="password" id="registro-repetir-contra"/>
                            <label id="lcontra2">Repita su contraseña</label>
                            <img className="right" src={checked} alt="Check sign" title="Check sign"/>
                            <img className="wrong" src={wrong} alt="Wrong sing" title="Wrong sign"/>
                            <small>Mensaje de error</small>
                        </div>
                        <button id="registrarseBoton">Registrarse</button> 
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Register;