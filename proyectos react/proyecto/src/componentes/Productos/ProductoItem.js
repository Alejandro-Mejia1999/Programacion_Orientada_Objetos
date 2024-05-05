import React from "react";
import img01 from '../../images/img01.jpg'
export const ProductoItems=({
                        id,
                        title,
                        price,
                        image,
                        category,
                        cantidad
})=>{
    
    return(
                
                <div className="producto">
                <a href="#">
                
                <div className="produc_imagen">
                    <img src={img01} alt="" />
                </div>
                </a>
                <div className="produc_footer">
                    <h1>title</h1>
                    <p>Categoria</p>
                <p className="precio">Lps. 1000</p>
                
                </div>
                <div className="buton">
                    <button className="btn">
                        añadir al carrito
                    </button>
                    <div>
                    <a href="#" className="btn">Vista</a>
                </div>
                </div>
                </div>
    )
}