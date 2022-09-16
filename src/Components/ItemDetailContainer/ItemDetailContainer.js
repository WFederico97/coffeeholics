import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { productosById } from "../../Firebase/firebaseCalls";
import Spinner from "react-bootstrap/esm/Spinner";

export default function ItemDetailContainer () {
    const [producto, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let {id} = useParams();

    useEffect(()=> {
        productosById(id)
        .then(producto => {
            setProducto(producto);
            setIsLoading(false)
        });
    }, [])

    return (
        <div className="itemDetailContainer container-fluid d-flex col col-12 justify-content-center">
            {
                isLoading ? (<Spinner/>) : (<ItemDetail producto={producto} />)
            }
        </div>
    )
}