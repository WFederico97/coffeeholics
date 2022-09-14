import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.scss'
import { RiShoppingCart2Fill, RiUserFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavbarHeader = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' className="navbarHeader">
                <Container>
                    <Navbar.Brand href="#home" >
                        <div className='col-6'>
                            <Link to={'/'} className='homeLink' ><h3 className=" coverHomeH3"> <img className='App-logo' src='./Images/logotipo-cafeteria-favicon.png' alt='icon' /> Coffeeholics</h3></Link>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav fill className="d-flex col  col-12 ">
                            <Nav.Link href="/#Home">Home</Nav.Link>
                            <Nav.Link href="/#Coffee">Sobre Cafe</Nav.Link>
                            <Nav.Link href="/#About">Sobre Nosotros</Nav.Link>
                            <Nav.Link href="/#Franchise">Franchising</Nav.Link>
                            <Nav.Link as={Link} to={'/shop'}>Coffeeshop</Nav.Link>
                            <RiUserFill id='login' className='navbarIcon' style={{ width: '2em', height: '2em', color: '#fff', margin: '1em' }} />
                            <RiShoppingCart2Fill id='cart' className='navbarIcon' style={{ width: '2em', height: '2em', color: '#fff', margin: '1em' }} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )

}
export default NavbarHeader
