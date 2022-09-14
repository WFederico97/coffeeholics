import { useState } from 'react'
import './ItemDetail.scss'
import { useCartContext } from '../../Context/CartContext'
import { updateStock } from '../../Firebase/firebaseCalls'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
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
        <Card >
            <Card.Img variant="top" src={producto.img} className='img-fluid' />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                    {producto.details}
                </Card.Text>
                <Card.Text>
                    Disponibilidad : <span>{
                        producto.stock > 0 ? <Badge bg='success'>En stock</Badge> : <Badge bg='danger'>Sin stock</Badge>
                    }</span>
                </Card.Text>
                <ItemCount stock={stockProducto} initial={1} onAdd={onAdd} />
            </Card.Body>
        </Card>
    )
}