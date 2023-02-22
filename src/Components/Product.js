import React from "react";
import { Card, Button } from 'react-bootstrap'

export default function Products(props) {

    function addLikes(){
        props.prod.like ++
    }

    return <Card className="flex">
    <Card.Header>
        <Card.Img src={require('../assets/images/' + props.prod.img)}></Card.Img>
    </Card.Header>
    <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{props.prod.name}</Card.Title>
        <Card.Text>Price : {props.prod.price} DT</Card.Text>
        <Card.Text>Quantity : {props.prod.quantity}</Card.Text>
        <Card.Text>Likes : {props.prod.like}</Card.Text>
    </Card.Body>
    <Card.Footer style={{ backgroundColor: "white" }}>
        <Button variant="primary" onClick={addLikes}>Likes</Button>
        <Button variant="info" style={{float: "right", backGroundColor: "cyan"}} disabled={props.prod.quantity===0} onClick={props.handleBuy}>Buy</Button>            
    </Card.Footer>
    </Card>;
}

// export default class Product extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = props.prod
//         //console.log(props.prod)
//         this.addLikes = this.addLikes.bind(this);
//         //this.state = { ...props};

//     }

//     addLikes = () =>
//         //this.setState(oldState=>{(product:{...oldState.product, like: oldState.product.like+1})}
//         // ou bien 
//         // e.preventDefault();
//         // this.setState((oldState) => ({
//         //   produit: { ...oldState.produit, like: oldState.produit.like + 1 },
//         // }));
//         this.setState((oldState) => ({
//             like: oldState.like + 1
//         }))

//     render() {
//         return <Card className="flex">
//             <Card.Header>
//                 <Card.Img src={require('../assets/images/' + this.state.img)}></Card.Img>
//             </Card.Header>
//             <Card.Body style={{ textAlign: "center" }}>
//                 <Card.Title>{this.state.name}</Card.Title>
//                 <Card.Text>{this.state.description}</Card.Text>
//                 <Card.Text>Price : {this.state.price} DT</Card.Text>
//                 <Card.Text>Quantity : {this.state.quantity}</Card.Text>
//                 <Card.Text>Likes : {this.state.like}</Card.Text>
//             </Card.Body>
//             <Card.Footer style={{ backgroundColor: "white" }}>
//                 <Button variant="primary" onClick={this.addLikes}>Likes</Button>
//                 <Button variant="info" style={{float: "right", backGroundColor: "cyan"}} disabled={this.props.prod.quantity===0} onClick={this.props.handleBuy}>Buy</Button>            </Card.Footer>
//         </Card>;
//     }
// }