// MODULES
import React, { useState, useEffect, useContext, Fragment } from 'react';
import { NavLink } from "react-router-dom";

// COMPONENTS
import { Nav, Container, Row, Col, Image } from 'react-bootstrap'

const Navbar = () => {
    // active Nav Styling
    var active = {
        color: 'wheat',
    };

    return (
        <Fragment>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Nav variant="light" className="justify-content-center navbar-row" activeKey="/">
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeStyle={active} exact to="/">MINT</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeStyle={active} to="/discord">DISCORD</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeStyle={active} to="/api">API</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeStyle={active} to="/docs">DOCS</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Navbar