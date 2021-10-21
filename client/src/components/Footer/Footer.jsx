// MODULES
import { Route, Switch, Link } from 'react-router-dom';
import React from 'react';

// COMPONENTS
import { Container, Navbar, Nav } from "react-bootstrap"

// ASSETS
import _claymesh from "../../../assets/images/claymesh.png"


const Footer = () => {
    return (
        <Navbar bg="none" variant="dark" fixed='bottom' className='footer-nav mb-4'>
            <Container>
                <Nav className="mx-auto d-flex align-items-center justify-content-space-around navbar-row">
                    <Nav.Link href="https://github.com/Claymesh" target="_blank" rel="noopener noreferrer" alt="Github"><img
                        src={_claymesh}
                        width="20"
                        height="20"
                        className="claymesh-img"
                        alt="Powered by the Claymesh API"
                    />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                    <Nav.Link href="mailto:terrabotsnft@gmail.com">SUPPORT</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer