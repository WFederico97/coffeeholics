import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import './BuyerForm.scss'
import { useCartContext } from "../../../Context/CartContext";

import { agregarCompra } from "../../../Firebase/firebaseCalls";

const initialState = {
    name: "",
    address: "" ,
    email: "",
    phone: "",
};

export default function BuyerForm() {
    const {cartList, clearCart, montoTotalCart, IVA } = useCartContext
    const [values, setValues] = useState(initialState);
    const [cargando, setCargando] = useState(false);
    const [alerta, setAlerta] = useState(false);
    const [idCompra, setIdCompra] = useState('');

    const handleOnChange = (e) => {
        setValues({...values, [e.target.name] : e.target.value })
    }

    const handleConfirmar = () => {
        if (values.address === "" || values.name === ""  || values.email === "") {
            setAlerta(true)
            return;
        }
        setCargando(true)

        let items = []
        cartList.forEach((item) => item.push({id:item.id, title: item.name, price: item.price, qty: item.qty, }))

        let total = {subtotal: montoTotalCart(), iva: IVA(), total: montoTotalCart() + IVA()};

        agregarCompra(values, items, total).then((id) => {
            setValues(initialState);
            setCargando(false);
            setIdCompra(id);
        })
        
    }


    return(
        <div className="buyerForm-container">

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </div>

    )
}
