import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Cart-Widget.scss'

import { useCartContext } from '../../../Context/CartContext'


const CartWidget = () => {

    const { qtyItems } = useCartContext();
    return (
        <Link to={'/cart'} className='cartWidget-container-link'>
            <div className="cartWidget-container">
            <RiShoppingCart2Fill id='cart' className='navbarIcon' style={{ width: '2em', height: '2em', color: '#fff', margin: '1em' }} />
            <p className="navbarIcon-qtyItems">{qtyItems()}</p>
            </div>

        </Link>

    )
}
export default CartWidget