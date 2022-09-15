import React from 'react'
import CartContainer from './CartContainer/CartContainer'
import { useCartContext } from '../../Context/CartContext'
import './Cart.scss'

export default function Cart () {
    const {cartList} = useCartContext();

    return(
        <div className='cartContainer'>
            {
                cartList.length === 0 ? (<h1>Carrito vacio</h1>) :(<CartContainer />)
            }
            
        </div>
    )
}