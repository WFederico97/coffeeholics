import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';

import './BuyerForm.scss'
import { useCartContext } from "../../../Context/CartContext";

import { agregarCompra } from "../../../Firebase/firebaseCalls";

const initialState = {
  name: "",
  address: "",
  email: "",
  phone: "",
};

export default function BuyerForm() {
  const { cartList, clearCart, montoTotalCart, IVA } = useCartContext

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
    cartList.forEach((item) => item.push({ id: item.id, title: item.name, price: item.price, qty: item.qty, }))

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
              controlId="floatingInput"
              label='Nombre'
              className="mb-3">
              <Form.Control
                required
                type='text'
                placeholder="Ingrese su nombre"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label='Apellido'
              className="mb-3">
              <Form.Control
                type='text'
                placeholder="Ingrese su Apellido"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label='Correo Electrónico'
              className="mb-3">
              <Form.Control
                required
                type='email'
                placeholder="Ingrese su correo electrónico"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label='Dirección'
              className="mb-3">
              <Form.Control
                required
                type='text'
                placeholder="Ingrese su Domicilio"
                autoFocus
                onFocus={() => setAlerta(false)}
                onChange={handleOnChange}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label='Teléfono'
              className="mb-3">
              <Form.Control
                type='number'
                placeholder="Ingrese su numero de telefono"

              />
            </FloatingLabel>
            <Button
            variant="primary"
            type="submit"
            onClick={handleConfirmar}
            disabled={cargando}
            className='w-100 m-1'
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
