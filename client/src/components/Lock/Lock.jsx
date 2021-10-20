
import React, { useEffect, useState, useContext } from 'react';
import { StateContext } from "../../../providers/StateProvider";
import { Container, Nav, Row, Badge, Image, Input } from 'react-bootstrap';

import lock_duotone from "../../../assets/svg/lock-duotone.svg"


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
            <Nav className="justify-content-center" sticky='top'><Badge style={style} className='lock-badge'>{address ? address.substr(0, 6) + '...' : <Image className='lock-svg' src={lock_duotone} width='15' height='15'></Image>}</Badge></Nav>
        </Container>
    )
};

export default Lock;