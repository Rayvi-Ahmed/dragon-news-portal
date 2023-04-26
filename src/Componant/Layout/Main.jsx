import React from 'react';
import Header from '../../Sheard/Header/Header';
import Footer from '../../Sheard/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Sheard/LeftNav/LeftNav';
import RightNav from '../../Sheard/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}><h2>Main Content is comming</h2></Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;