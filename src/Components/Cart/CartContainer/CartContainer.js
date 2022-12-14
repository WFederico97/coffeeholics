import React from "react";
import { Link } from "react-router-dom";
import "./CartContainer.scss";
import { useCartContext } from "../../../Context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import { updateStock } from "../../../Firebase/firebaseCalls";
import Container from "react-bootstrap/esm/Container";
import NoItemModal from "../../Modals/NoItemsModal/NoItemModal";
import BuyerForm from "../../Forms/BuyerForm/BuyerForm";

export default function CartContainer() {
    const { cartList, clearCart, qtyItems, montoTotalCart, IVA, montoFinal } = useCartContext();

    const handleClearCarrito = () => {
        cartList.forEach(item => {
            updateStock(item.id, item.stock)
        })
        clearCart();
    }

    return (
        <>
            <div className="cartContainer-title d-flex col-10 justify-content-evenly ">
                <div className="cartContainer-title-qtyCart col-4">
                    <h2>
                        Mi carrito ({qtyItems()} {qtyItems() > 1 ? 'items' : 'item'})
                    </h2>
                </div>
                <div className="cartContainer-title-keepshopingBtn d-flex col-4 justify-content-center">
                    <Link to={'/shop'} className='cartContainer-title-keepshopingBtn-link'>
                        <h4 className="col-1">Seguir Comprando</h4>
                    </Link>
                    <h4 className="col-1" onClick={handleClearCarrito}  >Vaciar Carrito</h4>
                </div>
            </div>
            <Container className="cartDetail-container d-flex col-12 align-items-center">
                <div className="cartDetail-container-leftSide col-6" >
                    {
                        cartList.map((item) => (<CartDetail key={item.id} item={item} />
                        ))}
                </div>
                <div className="cartDetail-container-rightSide col-6">
                    <h3 className="cartDetail-container-rightSide-h3">Resumen pedido</h3>

                    <div className="cartDetail-container-rightSide-section">
                        <h4 className="cartDetail-container-rightSide-section-h4">Subtotal ($) : </h4>
                        <p className="cartDetail-container-rightSide-section-p">{montoTotalCart()}</p>
                        <hr />
                    </div>
                    <div className="cartDetail-container-rightSide-section" >
                        <h4 className="cartDetail-container-rightSide-section-h4"> + IVA :</h4>
                        <p className="cartDetail-container-rightSide-section-p">{IVA()}</p>
                        <hr />
                    </div>
                    <div className="cartDetail-container-rightSide-section">
                        <h4 className="cartDetail-container-rightSide-section-h4"> TOTAL ($) :</h4>
                        <p className="cartDetail-container-rightSide-section-p">{montoFinal()}</p>
                        <hr />
                    </div>

                    <div className="cartDetail-container-righSide-section-logos d-flex justify-content-evenly ">
                        <img src={"./Images/amex-svgrepo-com.svg"} alt='amex logo'/>
                        <img src={"./Images/apple-pay-payment-mark-logo-svgrepo-com.svg"} alt='apple pay logo'/>
                        <img src={"./Images/google-pay-primary-logo-logo-svgrepo-com.svg"} alt='google pay logo'/>
                        <img src={"./Images/mastercard-svgrepo-com.svg"} alt='mastercard logo'/>
                        <img src={"./Images/paypal-svgrepo-com.svg"} alt='paypal logo'/>
                    </div>

                     <div className="buttons-container">
                        {
                            qtyItems() > 0 ? <BuyerForm /> : <NoItemModal />
                        }
                    </div> 
                </div>
            </Container>
        </>
    )
}
