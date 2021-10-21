import React, { useEffect, useState, Fragment } from 'react';
import { Container, Col, Row, Button, Image, Input } from 'react-bootstrap';

const data = require('../../../../build/contracts/ArtCollectible.json');
const abiArray = data.abi;
const contract_address = '0x15cf9d20c1a6a55C5204D31C39b7eb9163F3d16F'

const Minter = (_web3) => {
    console.log('hello', _web3)
    return (
        <Fragment>
        </Fragment>
    )
};

export default Minter;