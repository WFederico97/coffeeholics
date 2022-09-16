import { useState } from 'react'
import './ItemDetail.scss'
import { useCartContext } from '../../Context/CartContext'
import { updateStock } from '../../Firebase/firebaseCalls'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({ producto }) {
    const [stockProducto, setStockProducto] = useState(producto.stock)

    const { addCart } = useCartContext()

    function onAdd(qty) {
        if (qty > 0) {
            addCart(producto, qty);

            updateStock(producto.id, producto.stock - qty);
            setStockProducto(producto.stock - qty)
        }
    }
    return (
        <Card className='cardItemDetail'>
            <Card.Img variant="top" src={producto.img} className='img-fluid cardItemDetail-img' />
            <Card.Body className='cardItemDetail-body'>
                <Card.Title className='cardItemDetail-title'><h4>{producto.name}</h4></Card.Title>
                <Card.Text className='cardItemDetail-text'>
                    {producto.details}
                </Card.Text>
                <div className='cardItemDetail-counter'>
                <ItemCount  stock={stockProducto} initial={1} onAdd={onAdd} />
                </div>

            </Card.Body>
        </Card>
    )
}