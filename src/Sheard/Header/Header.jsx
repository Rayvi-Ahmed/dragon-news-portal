import React from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>

            <div className='text-center mb-2'>
                <img src={logo} alt="" />
                <p className='text-senecdary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
                <div className='d-flex'>
                    <Button variant="danger bg-secendary">Braking News</Button>
                    <Marquee className='text-danger bg-senecdary' speed={100}>
                        I can be a React component, multiple React components, or just some text. !! I can be a React component, multiple React components, or just some text.
                    </Marquee>


                </div>
                <div className='my-5'>
                    <Navbar className='rounded-2' collapseOnSelect expand="lg" bg="light" variant="light">
                        <Container>
                            <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mx-auto">
                                    <Nav.Link href="#features">Home</Nav.Link>
                                    <Nav.Link href="#pricing">Career</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">Profile</Nav.Link>
                                    <Nav.Link eventKey={2} href="#memes">
                                        <Button variant="secondary">Login</Button>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

            </div>
        </Container>
    );
};

export default Header;