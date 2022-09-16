import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom'
import './Item.scss'

export default function Item({ producto }) {
    return (
        <div className='cardItem-container'>
            <Link to={`/producto/${producto.id}`} className='productCard'>
                <Card className='cardItem' >
                    <Card.Img variant="top" src={producto.img} alt={producto.name} className='img-fluid cardItem-img' />
                    <Card.Body className='cardItem-body'>
                        <Card.Title className='cardItem-title'><p>{producto.name}</p></Card.Title>
                        <Card.Text className='cardItem-text'>
                            ${producto.price}
                        </Card.Text>
                        <Card.Text className='cardItem-text'>
                            <span> <p className='cardItem-text-p' >Disponibilidad : {
                                producto.stock > 1 ? <Badge className='m-1' bg='success'>En stock</Badge> : <Badge className='m-1' bg='danger'>Sin stock</Badge>
                            }</p></span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </div>
    )
}