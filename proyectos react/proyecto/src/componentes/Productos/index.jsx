import React, { useContext } from "react";
import {Datacontext} from "../../context/Dataprovide";
//import img01 from '../../images/img01.jpg';
import { ProductoItems } from "./ProductoItem";

export const Productos=()=>{
   
    return(
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                <ProductoItems/>
                <ProductoItems/>
                <ProductoItems/>
                <ProductoItems/>       
            </div>
        </>
    
    )
}
