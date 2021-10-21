
import React, { useEffect, useState, useContext, Fragment } from "react";
import { Nav, Container, Row, Col, Image, Button } from 'react-bootstrap'

import { StateContext } from "../../../providers/StateProvider";
import Minter from "../../components/Minter";
import Web3 from 'web3'
const web3 = new Web3(Web3.givenProvider)
// const web3 = new Web3(provider);

const Home = () => {
    const [user, loadUser] = useState(null);
    const [buttonText, setButtonText] = useState('connect');
    const { address, addressHandler } = useContext(StateContext)


    useEffect(() => {
        if (window.ethereum.selectedAddress) {
            setButtonText(window.ethereum.selectedAddress)
            addressHandler(window.ethereum.selectedAddress)
        } else return;
    }, [])
    const handleConnect = () => {


        if (!window.ethereum) {
            setButtonText('metamask wallet not detected')
        }
        if (window.ethereum) {
            setButtonText(<span className="spinner-border spinner-border-sm mt-1"></span>);
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((res) => {
                    loadUser(res[0])
                    setButtonText(res[0])
                    addressHandler(window.ethereum.selectedAddress)
                    console.log(res[0])
                })
                .catch(() => setButtonText('connect'));
        }
    };


    return (
        <Fragment>
            <Container className="mt-2 mb-3 text-center home-container">
                {address ? null : <Button onClick={handleConnect} className='blue-cm-button mt-3' variant="primary">{buttonText}</Button>}
                {window.ethereum.selectedAddress ? <Minter _web={web3}></Minter> : null}
                <Row className="pt-4">
                    <Col>
                        <i>
                            Terrabots are unique art pieces that <br /> are created autonomously in the cloud.
                        </i>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home