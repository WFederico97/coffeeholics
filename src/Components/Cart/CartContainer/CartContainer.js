import React from "react";
import { Link } from "react-router-dom";
import "./CartContainer.scss";
import { useCartContext } from "../../../Context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import { updateStock } from "../../../Firebase/firebaseCalls";
import Container from "react-bootstrap/esm/Container";

export default function CartContainer() {
    const {cartList, clearCart, qtyItems, montoTotalCart, IVA, montoFinal} = useCartContext();

    const handleClearCarrito = () => {
        cartList.forEach(item => {
            updateStock(item.id, item.stock)
        })
        clearCart();
    }

    return(
        <>
        <div className="cartContainer-title">
            <h2>
                Mi carrito ({qtyItems()} {qtyItems() > 1 ? 'items' : 'item'})
            </h2>
        </div>
        <div className="cartContainer-keepShopping-btn">
            <Link to={'/shop'}>
                <h4>Seguir comprando</h4>
            </Link>
            <h4 onClick={handleClearCarrito} className='cartContainer-clearCart'>Vaciar Carrito</h4>
        </div>

        <Container className="cartDetail-container">
            <div className="cartDetail-leftSide">
                {cartList.map((item) => (
                    <CartDetail key={item.id} item={item}  />
                ))}
            </div>
            <div className="cartDetail-rightSide">
                <h2>Tu pedido</h2>

                <div className="cartDetail-rightSide-checkout">
                    <h3> Subtotal ($): </h3>
                    <p>{montoTotalCart()}</p>
                </div>
                <div className="cartDetail-rightSide-checkout">
                    <h3> IVA - 21% ($): </h3>
                    <p>{IVA()}</p>
                </div>
                <div className="cartDetail-rightSide-checkout">
                    <h3> TOTAL ($): </h3>
                    <p>{montoFinal()}</p>
                </div>
            </div>
        </Container>
        </>
    )
}
