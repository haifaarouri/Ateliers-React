import React, { Component } from 'react';
import Product from './Product'
import AllProducts from '../products.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';

export default class Products extends React.Component {

    constructor(props){
        super(props);
        console.log("Products component");
        this.listProducts = AllProducts;
    }

    buyProd = () => {

    }

    render() {
        return <div>
            <Alert>Hey, Welcome to Our Shop MyStrore Thank you for choosing our strore</Alert>
            {/* Product 1: <Product/> */}
            <Container>
                <Row>
                    <Col className="d-flex">{this.listProducts.map((p,index) => <Product key={index} prod={p}></Product>)}</Col>
                </Row>
            </Container>
        </div>
    }
}