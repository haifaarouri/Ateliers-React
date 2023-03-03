import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getallProducts } from '../service/api';
// import products from "../products.json";

function ProductDetails() {
    const {prodId} = useParams();
    // const product = products.find((product)=>product.name === name);
    const [prod, setProd] = useState({})

    useEffect(()=>{
      getallProducts(prodId)
      .then((res)=>setProd(res.data))
      .catch((err)=> console.log({message : "Product does not exist", err}))
    }, [])

  return (
    <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={require("../assets/images/" + prod.img)}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{prod.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {prod.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{prod.price} DT</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{prod.like}</p>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default ProductDetails