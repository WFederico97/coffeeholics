import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import './ContactForm.scss'


export default function ContactForm() {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
      e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    }
    return (
      <Container className="container-contactForm mt-5">
        <h2 className="container-contactForm-title mb-3">Formulario de contacto para franquicias</h2>
        <Form className="container-contactForm-form my-5 justify-content-evenly" onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
             Nombre
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
                Contanos un poco sobre vos
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <Button className="w-100" type="submit">
            {formStatus}
          </Button>
        </Form>
      </Container>
    )
}