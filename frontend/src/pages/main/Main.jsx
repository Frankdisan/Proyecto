import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import { Link } from "react-router-dom";
import routePaths from "../../routePaths";
import "./main.css"

function Main () {
    return (
        <>
            <Header/>
            <main id="inicio-main">
                <h1> ¡Bienvenidos! </h1>
                <div className= "cajas">
                    <div><Link to={routePaths.notReady}>Propuestas de examen</Link></div>
                    <div><Link to={routePaths.notReady}>Temas</Link></div>
                    <div><Link to={routePaths.book}>Reserva tu clase</Link></div>
                    <div><Link to={routePaths.calculator}>Calculadora</Link></div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Main;