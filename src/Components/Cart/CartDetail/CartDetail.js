import React, {useEffect, useState} from 'react'
import { useCartContext } from '../../../Context/CartContext'
import { Link } from "react-router-dom";
import { productosById, updateStock } from '../../../Firebase/firebaseCalls';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";

export default function CartDetail({item}) {
    const {addCart, removeItem} = useCartContext();
    const [stockProducto, setStockProducto] = useState(item.stock);

    useEffect(()=> {
        productosById(item.id).then(producto => setStockProducto(producto.stock))
    },)

    const sumarArticulo = () => {
        if(stockProducto > 0) {
            addCart(item, 1);

            updateStock(item.id, (stockProducto - 1));

            setStockProducto(stockProducto - 1);
        }
    };

    const restarArticulo = () => {
        if(item.qty > 0){
            addCart(item, -1);

            updateStock(item.id, (stockProducto + 1));

            setStockProducto(stockProducto + 1);
        }
    }

    function handlerDeleteBtn () {
        updateStock(item.id, (item.qty + stockProducto))
        removeItem(item.id)
    }

    return (
        <Container fluid className='cartItem-container' > 
            <div className='cartItem-leftSide'>
                <Link to={`/producto/${item.id}`}>
                    <img className='cartItem-img' src={item.img} alt={item.name} />
                </Link>
            </div>
            <div className='cartItem-rightSide'>
                <p className='cartItem-rightSide-tittle'>{item.name}</p>
                <p className='cartItem-rightSide-category'>Categoría: <span><p className='text-uppercase'> {item.category} </p> </span></p>
                <div className='cartItem-rightSide-prices'>
                    <p className='cartItem-rightSide-productPrice'>Precio ($): <span>{item.price}</span></p>
                    <p className='cartItem-rightSide-productQty'>Cantidad: <span>{item.qty}</span></p>
                </div>
                <p className='cartItem-rightSide-subtotal'>SubTotal ($) : <span>{item.price * item.qty}</span></p>
            </div>
            <div className='cartItem-cantidades'>
                <div className='cartItem-detail'>
                    <Button onClick={restarArticulo} > - </Button>
                    <p>{item.qty}</p>
                    <Button onClick={sumarArticulo} > + </Button>
                </div>
                <p className='cartItem-cantidades-stock'>Stock: {stockProducto} {stockProducto > 1 ? 'uds.' : 'ud.' } </p>
                <FaTrash className='cartItem-cantidades-trashIcon' onClick={handlerDeleteBtn} />
            </div>
        </Container>
    )
}