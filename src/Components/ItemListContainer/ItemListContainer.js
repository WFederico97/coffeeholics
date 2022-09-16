import React, {useEffect, useState} from "react";
import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
import SpinnerLoading from '../../Utils/Spinner/Spinner'
import { useParams } from "react-router-dom";
import { getAllProducts } from "../../Firebase/firebaseCalls";

export default function ItemListContainer ({greeting}) {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    let {tipo} = useParams();

    useEffect(()=>{
        setIsLoading(true);
        getAllProducts(tipo)
        .then(productos => {
            setProductos(productos);
            setIsLoading(false)
        });
    },  [tipo]);

    return (
        <section className="itemListContainer">
            <h2 className="greeting">{greeting}</h2>
            {
                isLoading ? (<SpinnerLoading/>) : (<ItemList productos={productos} /> )
            }
        </section>
    )
}