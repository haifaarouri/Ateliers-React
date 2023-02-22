import React, { useEffect, useState } from 'react';
import Product from './Product'
import AllProducts from '../products.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';

export default function Products(props) {
    const [{alertbienvenue}, setAlert] = useState({alertbienvenue:true})
    const [alertBuy, setAlertBuy] = useState(false)

    useEffect(()=> {
        setTimeout(() => {
            setAlert({alertbienvenue: false})
            }, 3000);
    })

    function buy (p){
        p.quantity--
        if (!alertBuy) {
            setAlertBuy(true);
            
        }
    }

    useEffect(()=> {
        setTimeout(() => {
            setAlertBuy(false)
            }, 2000);
    }, [alertBuy])

    return <div>
        {alertbienvenue && (<Alert variant="success">
        <Alert.Heading>Hey, Welcome to Our Shop <b>MyStore</b></Alert.Heading>
        Thank you for choosing our strore, we hope you enjoy your shopping experience!
        <hr />
        </Alert>)}
    <Container>
        <Row>
            <Col className="d-flex">
            {AllProducts.map((p, index) => <Product key={index} prod={p} handleBuy={() => buy(p)}></Product>)}
            </Col>
        </Row>
        {alertBuy && (<Alert variant="info">
            You Bought an item
        </Alert>)}
    </Container>
    </div>;
}