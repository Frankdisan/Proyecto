import React from "react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import routePaths from "../../routePaths";
import "./header.css";

function Header() {
    return (
        <header id="header">
            <Link to={routePaths.main}><img id="logo" src={logo} alt="Logo"/></Link>
            <div>
                <ul id="inicio">
                    <li><Link to={routePaths.main}>Inicio</Link></li>
                    <li><Link to={routePaths.notReady}>Propuestas de examen</Link></li>
                    <li><Link to={routePaths.notReady}>Temas</Link></li>
                    <li><Link to={routePaths.book}>Reserva tu clase</Link></li>
                    <li><Link to={routePaths.calculator}>Calculadora</Link></li>
                    <li><Link to={routePaths.register}>Regístrese</Link></li>
                    <li><Link to={routePaths.login}>Ingrese</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;

