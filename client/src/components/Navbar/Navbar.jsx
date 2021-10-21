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

            <Container className='navbar-container '>
                <Row className="mt-3">
                    <Col>
                        <Nav variant="light" className="justify-content-center navbar-row" activeKey="/">
                            <Nav.Item>
                                <Nav.Link as={NavLink} activeStyle={active} exact to="/">HOME</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://opensea.io/collection/terrabots" target='_blank' activeStyle={active}>OPENSEA</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://discord.gg/7bA4Jvhd" target="_blank" activeStyle={active}>DISCORD</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://twitter.com/terrabots_nft" target='_blank' activeStyle={active} >TWITTER</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                                <Nav.Link as={NavLink} activeStyle={active} to="/docs">DOCS</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Navbar