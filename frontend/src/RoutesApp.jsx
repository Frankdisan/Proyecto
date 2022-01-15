import React from "react";
import { Routes, Route } from "react-router-dom"
import Book from "./pages/book/Book";
import Calculator from "./pages/calculator/Calculator";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Register from "./pages/register/Register.jsx";
import routePaths from "./routePaths";
import NotFound from "./pages/notFound/NotFound";
import Temas from "./pages/temas/Temas";
import Propuestas from "./pages/propuestas/Propuestas";



function RoutesApp() {
    return (
        <>
            <Routes>
                <Route path={routePaths.main} element={<Main/>}/>
                <Route path={routePaths.register} element={<Register/>}/>
                <Route path={routePaths.login} element={<Login/>}/>
                <Route path={routePaths.book} element={<Book/>}/>
                <Route path={routePaths.calculator} element={<Calculator/>}/>
                <Route path={routePaths.notReady} element={<Temas/>}/>
                <Route path={routePaths.notReady} element={<Propuestas/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
    )
};

export default RoutesApp;