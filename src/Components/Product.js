import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Products(props) {
    const [{ nbrlikes }, setLikes] = useState(props.prod.like)

    function addLikes() {
        setLikes(props.prod.like += 1)
    }

    return <Card className={props.prod.like > 5 ? 'flex bestProduct' : 'flex'}>
        <Card.Header>
            <Card.Img src={require('../assets/images/' + props.prod.img)}></Card.Img>
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>
                <Link to={`/products/details/${props.prod.name}`}>{props.prod.name}</Link>
            </Card.Title>
            <Card.Text>Price : {props.prod.price} DT</Card.Text>
            <Card.Text>Quantity : {props.prod.quantity}</Card.Text>
            <Card.Text>Likes : {props.prod.like}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
            <Button variant="primary" onClick={addLikes}>Likes</Button>
            <Button variant="info" style={{ float: "right", backGroundColor: "cyan" }} disabled={props.prod.quantity === 0} onClick={props.handleBuy}>Buy</Button>
        </Card.Footer>
    </Card>;
}