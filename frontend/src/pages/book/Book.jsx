import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import "./book.css";

function Book () {
    return (
        <>
            <Header/>
            <main id="main-agenda">
                <div id="agenda">
                    <form id="agenda-datos"> 
                        <label for="nombre">Nombre</label>
                        <input className="input" type="text" name="nombre"/>
                        <label for="nivel">Nivel</label>
                        <select className="input" name="nivel">
                            <option disabled selected></option>
                            <option>1er Año</option>
                            <option>2do año</option>
                            <option>3er año</option>
                            <option>4to año</option>
                            <option>5to año</option>
                            <option>6to año</option>
                        </select>
                        <label for="calen">Fecha y hora</label>
                        <input className="input" type="datetime-local" name="calen"/> 
                        <label for="medio">Medio</label>
                        <select className="input" name="medio">
                            <option selected disabled></option>
                            <option>Casa del profesor</option>
                            <option>Casa del estudiante</option>
                            <option>Virtual</option>
                        </select>
                        <button id="agenda-boton">Agendarse</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Book;