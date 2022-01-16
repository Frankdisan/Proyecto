import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import "./login.css"

function Login () {
    return (
        <>
            <Header/>
            <div class="ingrese-login-contenedor">
                <form id="ingreseForm" class="ingrese-form">
                    <h2>Ingrese</h2>
                    <div class="ingrese-input-grupo">
                        <input id="ingreseUsername" type="text" name="loginUser" autocomplete="off"/>
                        <label id="loginLUsername" for="loginUser">Nombre de usuario</label>
                    </div>
                    <div class="ingrese-input-grupo">
                        <input id="ingresePassword" type="password" name="loginPassword"/>
                        <label id="loginLPassword" for="loginPassword">Contraseña</label>
                    </div>
                    <a id="olvido" href="#olvido-contraseña">¿Olvidó su contraseña?</a>
                    <button id="ingreseBoton" class="ingrese-submit-btn">Ingresar</button>
                </form>
                <div id="olvido-contraseña">
                    <form action="" class="ingrese-form">
                        <a href="#" id="close">&times;</a>
                        <h2>Restablezca su contraseña</h2>
                        <div class="ingrese-input-grupo">
                            <input type="email" name="email" id="email" autocomplete="off" required/>
                            <label for="email">E-mail</label>
                        </div>
                        <input id="submitEspecial" type="submit" value="Enviar" class="ingrese-submit-btn"/>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Login;