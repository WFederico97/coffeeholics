import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Cart-Widget.scss'

import { useCartContext } from '../../../Context/CartContext'
import Badge from "react-bootstrap/esm/Badge";


const CartWidget = () => {

    const { qtyItems } = useCartContext();
    return (
        <Link to={'/cart'} className='cartWidget-container-link'>
            <Badge className="cartWidget-container bg-transparent fs-6">
            <RiShoppingCart2Fill id='cart' className='navbarIcon' style={{ width: '2em', height: '2em', color: '#fff', margin: '1em' }} />
            {qtyItems() || " "} 
            </Badge>

        </Link>

    )
}
export default CartWidget