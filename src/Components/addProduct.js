import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductReducer } from "../ReduxToolkit/slices/productSlice";
import { Spinner } from "react-bootstrap";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    img: "",
    like: 0,
    quantity: 0,
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log(product);
  };
  const handleChangeFile = (e) => {
    console.log(e.target.files[0].name);
    console.log(e.target.name);

    setProduct({ ...product, img: e.target.files[0].name });
    console.log(product);
  };

  const add = (e) => {
    e.preventDefault();
    setIsLoading(true);
    addProduct(product).then(() => {
      setIsLoading(false);
      dispatch(addProductReducer(product));
      navigate("/products/list");
    });
  };
  return (
    <Container style={{ marginTop: "30px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter the name"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product description"
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" onChange={(e) => handleChangeFile(e)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => add(e)}>
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </>
          ) : (
            <> Add Product</>
          )}
        </Button>
        {/* <Button variant="gray" type="reset">
          Save
        </Button> */}
      </Form>
    </Container>
  );
}

export default AddProduct;
