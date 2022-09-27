import React from 'react'
import CartContainer from './CartContainer/CartContainer'
import { useCartContext } from '../../Context/CartContext'
import './Cart.scss'
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";

export default function Cart() {
    const { cartList } = useCartContext();

    return (

        <div className='cartContainer'>
            {
                cartList.length === 0 ? (
                    <>
                        <h1 className='cartContainer-noItems-h1 d-flex col-12'>Carrito vacio</h1>
                        <Link to={'/shop'} >
                            <Button className='goBack-button d-flex col-6 justify-content-center mx-auto '>Volver a la tienda</Button>
                        </Link>
                    </>

                )
                    : (<CartContainer />)
            }

        </div>
    )
}