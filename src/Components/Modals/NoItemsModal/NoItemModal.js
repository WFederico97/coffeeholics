import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import './NoItemModal.scss'

export default function NoItemModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='noItemModal'>
            <Button onClick={handleShow} className='finalizarCompra-button'>Finalizar Compra</Button>

            <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card >
                    <Card.Body>
                        <Card.Text>
                            Lo sentimos , no hay productos en tu carrito :(
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Modal>
        </div>
    );
}