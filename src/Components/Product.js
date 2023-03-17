import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../ReduxToolkit/slices/cartSlice";

function Product(props) {
  const [product,] = useState(props.product);
  const [likes, setLikes] = useState(props.product.like);

  const like = () => {
    setLikes(likes + 1);
  };
  useEffect(() => {
    console.log("Likes Update");
  }, []);
  const className = likes > 5 ? "bestProduct mx-auto my-2" : "mx-auto my-2";

  //const productRedux = useSelector((state) => state.product.product)
  const dispatch = useDispatch();

  const addProdToCart = (p) => {
    dispatch(addToCart(p))
  }
  return (
    <Card style={{ width: "18rem" }} className={className}>
      <Card.Img
        variant="top"
        src={require("../assets/images/" + product.img)}
        height="200"
        width="50"
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price :{product.price}</Card.Text>
        <Card.Text>Quantity :{product.quantity}</Card.Text>
        <Card.Text>Likes :{likes}</Card.Text>
        <Row>
          <Col md={6}>
            <Button variant="primary" onClick={like} size="sm">
              Like
            </Button>
          </Col>
          <Col md={6}>
            <Button
              size="sm"
              variant="info"
              onClick={() => props.buyFunction(product)}
              disabled={product.quantity <= 0}
            >
              Buy
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={6}>
            {" "}
            <Button variant="success" size="sm"><Link to={`/products/update/${product.id}`} style={{ textDecoration: 'none', color: 'white' }}>Update</Link></Button>
          </Col>
          <Col md={6}>
            <Button variant="danger" size="sm" onClick={() => props.deleteProd(product.id)}>Delete</Button>
          </Col>
        </Row>
        <Button variant="success" size="sm" onClick={() => props.addProdToCart(product)}>ADD TO CART +</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
