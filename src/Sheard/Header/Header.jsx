import React from 'react';
import logo from '../../../src/assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
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

            </div>
        </Container>
    );
};

export default Header;