import React, { Component } from "react";
import {Card, Button} from 'react-bootstrap'

export default class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = props.prod
        //console.log(props.prod)
        this.addLikes = this.addLikes.bind(this);
    }

    addLikes = () =>
        this.setState((oldState) => ({
            like : oldState.like + 1
        }))

    render() {
        return <Card className="flex">
            <Card.Header>
                <Card.Img src={require('../assets/images/'+this.state.img)}></Card.Img>
            </Card.Header>
            <Card.Body>
                <Card.Title>{this.state.name}</Card.Title>
                <Card.Text>{this.state.description}</Card.Text>
                <Card.Text>Price : {this.state.price} DT</Card.Text>
                <Card.Text>Quantity : {this.state.quantity}</Card.Text>
                <Card.Text>Likes : {this.state.like}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary" onClick={this.addLikes}>Likes</Button>
                <Button variant="info" style={{float: "right", backGroundColor: "cyan"}} disabled={this.props.prod.quantity===0}>Buy</Button>
            </Card.Footer>
        </Card>;
    }
}