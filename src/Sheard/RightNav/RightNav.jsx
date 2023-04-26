import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa'





const RightNav = () => {
    return (
        <div>
            <h4 className='text-start'>Login With</h4>
            <div className='text-start'>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
            </div>
            <div className='my-3'>
                <h4 className='text-start'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item ><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitterSquare /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    );
};

export default RightNav;