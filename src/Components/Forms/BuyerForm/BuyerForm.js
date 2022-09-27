import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

import { useCartContext } from "../../../Context/CartContext";

import { agregarCompra } from "../../../Firebase/firebaseCalls";
import { serverTimestamp } from "firebase/firestore";

const initialState = {
  name: "",
  address: "",
  email: "",
  phone: "",
  date: serverTimestamp()
};

export default function BuyerForm() {
  const { cartList, clearCart, montoTotalCart, IVA } = useCartContext();

  //form states
  const [values, setValues] = useState(initialState);
  const [cargando, setCargando] = useState(false);
  const [alerta, setAlerta] = useState(false);
  const [idCompra, setIdCompra] = useState('');

  //modals state
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    if (idCompra !== "") {
      clearCart()
    }
  };
  const handleShow = () => setShow(true);

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleConfirmar = () => {
    if (values.address === "" || values.name === "" || values.email === "") {
      setAlerta(true)
      return;
    }

    setCargando(true)

    let items = []

    cartList.forEach((item) => items.push({ id: item.id, title: item.name, price: item.price, qty: item.qty, category: item.category }))

    let total = { subtotal: montoTotalCart(), iva: IVA(), total: montoTotalCart() + IVA() };

    agregarCompra(values, items, total).then((id) => {
      setValues(initialState);
      setCargando(false);
      setIdCompra(id);
    })

  }


  return (
    <div className="buyerForm-container">
      <Button onClick={handleShow} className='finalizarCompra-button w-50'>Finalizar Compra</Button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="buyerForm-container-modal"
      >

        <Modal.Header closeButton>
          <Modal.Title>Ingrese sus datos para confirmar la Compra</Modal.Title>
        </Modal.Header>
        {
          alerta ? (
            <Alert className="text-center" variant="danger">
              Nombre, Dirección y Correo electrónico son obligatorios
            </Alert>
          ) : null
        }
        {
          idCompra !== "" ? (
            <Alert variant="success" className="alert_success">
              Compra realizada con éxito , su ID de compra es : <span>{idCompra}</span>
            </Alert>
          ) : null
        }
        <Modal.Body>
          <Form>

            <FloatingLabel
              controlId="name"
              label='Nombre'
              className="mb-3">
              <Form.Control
                required
                type='text'
                name="name"
                placeholder="Ingrese su nombre"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="surname"
              label='Apellido'
              className="mb-3">
              <Form.Control
              name="surname"
                type='text'
                placeholder="Ingrese su Apellido"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="email"
              label='Correo Electrónico'
              className="mb-3">
              <Form.Control
                required
                name="email"
                type='email'
                placeholder="Ingrese su correo electrónico"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="address"
              label='Dirección'
              className="mb-3">
              <Form.Control
                required
                name="address"
                type='text'
                placeholder="Ingrese su Domicilio"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              
              controlId="phone"
              label='Teléfono'
              className="mb-3">
              <Form.Control
                type='number'
                name="phone"
                placeholder="Ingrese su numero de telefono"

              />
            </FloatingLabel>
            <Button
            className={idCompra !== '' ? 'boton-finalizar-compra-oculto d-none ' : 'boton-finalizar-compra m-1 w-100'}
            type='submit'
            variant="primary"
            onClick={handleConfirmar}
            disabled={cargando}
          >
            Confirmar Compra
          </Button>
          <Button onClick={handleClose} className='m-1 w-100'>
            {idCompra !== '' ? 'Cerrar' : 'Cancelar'}
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>

  )
}
