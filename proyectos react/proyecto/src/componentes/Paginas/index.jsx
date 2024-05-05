import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import {Inicio} from '../inicio'
import {Productos} from "../Productos/index"
export const Paginas=()=>{
    return(
        <section>
            <Routes>
                <Route path="/" exact Component={Inicio}/>
                <Route path="/Productos" exact Component={Productos}/>
            </Routes>
        </section>
    );
};
export default Paginas;