import React, { Component } from 'react';
import Product from './Product'
import AllProducts from '../products.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Alert } from 'react-bootstrap';

export default class Products extends React.Component {

    constructor(props) {
        super(props);
        console.log("Products component");
        this.listProducts = AllProducts;
        this.state = {
            prodList: this.listProducts,
        };
        this.state = {
            ...props, alertbienvenue: true, alertBuy: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ alertbienvenue: false });
        }, 3000);
    }
    buy = () => {
        if (!this.state.alertBuy) {
            this.setState({ alertBuy: !this.state.alertBuy });
            setTimeout(() => {
                this.setState({ alertBuy: !this.state.alertBuy });
            }, 2000);
        }
    }
    render() {
        return <div>
            {this.state.alertbienvenue && (<Alert variant="success">
                <Alert.Heading>Hey, Welcome to Our Shop <b>MyStrore</b></Alert.Heading>
                Thank you for choosing our strore, we hope you enjoy your shopping experience!
                <hr />
            </Alert>)}
            <Container>
                <Row>
                    <Col className="d-flex">
                        {this.listProducts.map((p, index) => <Product key={index} prod={p} handleBuy={this.buy}></Product>)}
                    </Col>
                </Row>
            </Container>
            {this.state.alertBuy && (<Alert variant="info">
                You Bought an item
            </Alert>)}
        </div>
    }
}