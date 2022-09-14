import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import './Item.scss'

export default function Item({producto}) {
    return (
        <>
            <Link to={`/shop/producto/${producto.id}`} className='productCard'>
                <Card >
                    <Card.Img variant="top" src={producto.img} alt={producto.name} className='img-fluid imgProducto' />
                    <Card.Body>
                        <Card.Title>{producto.name}</Card.Title>
                        <Card.Text>
                            ${producto.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </>
    )
}