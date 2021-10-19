// MODULES
import React, { useState, useEffect, useContext, Fragment } from 'react';

// COMPONENTS
import { Nav, Container, Row, Col, Image } from 'react-bootstrap'

// ASSETS
import _head from "../../../assets/images/head.png"
import _textlogo from "../../../assets/images/textlogo.png"


const Header = () => {
    // Active Nav Styling
    var active = {
        color: 'white',
    };

    return (
        <Fragment>
            <Container className="navbar-container mt-5">
                <Row className="">
                    <Col xs={8} sm={6} md={4} className="m-auto">
                        <img
                            className="p-3 d-block mx-auto img-fluid w-40"
                            src={_head}
                            alt="Terrabots Head"
                        ></img>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8} sm={5} md={3} className="m-auto">
                        <img
                            className="p-3 d-block mx-auto img-fluid w-40"
                            src={_textlogo}
                            alt="Terrabots Text"
                        ></img>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Header