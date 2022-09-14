import React, { useState, useEffect, useContext } from "react";
import "./ItemCount.scss";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import Button from "react-bootstrap/esm/Button";

export default function ItemCount ({stock, initial, onAdd}){
    const [count, setCount] = useState(initial)

    const [btnIncr, setBtnIncr] = useState(false);
    const [btnDecr, setBtnDecr] = useState(true)

    const {qtyItems} = useCartContext();

    function restar(){
        if(count > 0) {
            setCount(count - 1)
        }
    }
    function sumar(){
        if(stock > count){
            setCount(count + 1)
        }
    }
    function handleClick() {
        onAdd(count);
        setCount(0)
    }

    useEffect(()=> {
        count === stock ? setBtnIncr(true) : setBtnIncr(false)
        count === 0 ? setBtnDecr(true) : setBtnDecr(false)
    }, []);

    return(
        <div className="itemCount-container">
            <div className="itemCount-btn">
                <Button onClick={restar} className='itemCount-control-btn' disabled={btnDecr} > - </Button>
                <Button onClick={sumar} className='itemCount-control-btn' disabled={btnIncr} > + </Button>
            </div>
            <p className="itemCount-stock">
                Stock disponible: <span>{stock - count}</span>
            </p>
            <div className="itemCount-btn-container">
                <Button onClick={handleClick} className='ItemCount-btn-cart'>
                    Agregar al Carrito
                </Button>
            </div>
            {
                qtyItems() === 0 ? null : (
                    <Link to={'/cart'}>
                        <Button className="itemCount-btn-cart">Ir al Carrito</Button>
                    </Link>
                )
            }
        </div>
    )
}