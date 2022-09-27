import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss'
import { Link } from "react-router-dom";
import CartWidget from '../../Cart/Cart Widget/Cart-Widget';

const NavbarHeader = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className="navbarHeader" variant='dark'>
                <Container fluid>
                    <Navbar.Brand href="#home" >
                        <div className='col-6 navbarBranding-container'>
                            <Link to={'/'} className='homeLink d-flex align-items-center justify-content-evenly' >
                                <img className='App-logo img-fluid m-1' src='./Images/logotipo-cafeteria-favicon.png' alt='icon' />
                                <h3 className=" coverHomeH3">
                                    Coffeeholics
                                </h3>
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav fill className="d-flex col  col-12 " navbarScroll>
                            <Nav.Link href="/#Home">Home</Nav.Link>
                            <Nav.Link href="/#Coffee">Sobre Cafe</Nav.Link>
                            <Nav.Link href="/#About">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="/#Franchise">Franchising</Nav.Link>
                            <Nav.Link as={Link} to={'/shop'}>Coffeeshop</Nav.Link>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )

}
export default NavbarHeader
