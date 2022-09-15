import React, {  useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => { 

    const [cartList, setCartList] = useState([]);

    function isInCart(id){
        return cartList.some(item => item.id === id)
    }

    function addCart(producto, qty) {
        if(qty === 0){
            return;
        }
        let exist = isInCart(producto.id)

        if(exist){
            let itemCart = cartList.find(item => item.id === producto.id);
            itemCart.qty += qty;
            setCartList([...cartList]);
        }else {
            setCartList([...cartList, {...producto, qty}])
        }
    }

    function qtyItems () {
        return cartList.reduce((total, item) => total + item.qty, 0)
    }

    function removeItem(id) {
        setCartList(cartList.filter(item=>  item.id !== id ))
    }

    function clearCart(){
        setCartList([])
    }

    function montoTotalCart() {
        return cartList.reduce((total, item)=> total + (item.qty * item.price), 0)
    }

    function IVA() {
        return montoTotalCart() * 0.21
    }

    function montoFinal(){
        return montoTotalCart() + IVA()
    }

    return (
        <CartContext.Provider value={
            {
                cartList, setCartList, qtyItems, clearCart,addCart, removeItem, montoTotalCart, IVA, montoFinal
            }
        }>
            {children}

        </CartContext.Provider>
    )
}
export default CartProvider;

