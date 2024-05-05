//import { createContext } from "react";
import Data from '../Data.js'
import { useState, useEffect,createContext } from "react";

export const Datacontext=createContext();

export const DataProvider=(props)=>{
    const[productos,setProductos]=useState([])
    useEffect(()=>{
        const producto=Data.items;
        if(producto){
            setProductos(producto);
        }else{
            setProductos([]);
        }
        
    },[])
    const value={
        productos:[productos]
    }
    return(
        <Datacontext.Provider value={value}>
            {props.children}
        </Datacontext.Provider>

    )
}