import React from "react";
import Item from "../Item/Item";

export default function ItemList({productos}) {

    return(
        <div className="itemList">
            <div className="catalogo-ItemList">
                {
                    productos.map((producto, index)=> (
                        <Item key={index} producto={producto} />
                    
                    ))}
            </div>

        </div>
    )

}