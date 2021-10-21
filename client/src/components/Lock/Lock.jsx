
import React, { useEffect, useState, useContext } from 'react';
import { StateContext } from "../../../providers/StateProvider";
import { Container, Nav, Row, Badge, Image, Input } from 'react-bootstrap';

import lock_duotone from "../../../assets/svg/lock-duotone.svg"
import ethereum_brands from "../../../assets/svg/ethereum-brands.png"

const Lock = () => {
    const { address, addressHandler } = useContext(StateContext)
    const [style, setStyle] = useState(null)
    const activeStyle = { border: 'solid 1px wheat' };

    useEffect(() => {
        if (address) {
            setStyle(activeStyle);
        } else setStyle(null)
    }, [address])

    return (
        <Container className='mt-5'>
            
            <Nav className="justify-content-center" sticky='top'>
                <Nav.Item >
                    <img  src={ethereum_brands} height='20' width='12'></img>
                </Nav.Item>
                <Nav.Item >
                    <div style={{paddingRight: '10px'}}></div>
                </Nav.Item>
                {address ? 
                <Nav.Item>
                <Badge style={style} className='lock-badge '>{address.substr(0, 6) + '...'}
                </Badge>  
                </Nav.Item> : null}
                </Nav>
        </Container>
    )
};

export default Lock;