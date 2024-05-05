import React from "react";
import inicio from "../../images/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio=()=>{
    return(
        <div className="inicio">
            <Link to="/">
                <h1 >INICIO</h1>
            </Link>
            <Link to="/Productos">
            <h1 >PRODUCTOS</h1>
            </Link>
            <img src={inicio} alt="inicio" />
        </div>
    )
}