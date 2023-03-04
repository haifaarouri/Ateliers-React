import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addProduct } from "../service/api";
import { Link, useNavigate } from "react-router-dom"; 

export default function AddProduct() {
    const [p, setP] = useState({
        "name": "",
        "price": "",
        "img": "",
        "like": 0,
        "quantity": 0,
        "description": ""
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        setP({...p, [e.target.name] : e.target.value})
        console.log(p)
    }

    const handleChangeFile = (e) => {
        console.log(e.target.value)
        setP({...p, img : e.target.files[0].name})
        console.log(p)
    }

    const navigate = useNavigate()
    const add = (e) => {
        e.preventDefault()
        addProduct(p).then(()=> navigate('/products/list'))
    }

    return (
        <Container style={{ marginTop: "30px" }}>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Enter the name" name="name" onChange={(e)=>handleChange(e)}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter the product description"  name="description" onChange={(e)=>handleChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" onChange={(e)=>handleChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" onChange={(e)=>handleChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name="ima" onChange={(e)=>handleChangeFile(e)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={add}>
                    Add Product
                </Button>
                <Link className="btn btn-light" to={"/products/list"} variant="gray" type="reset">
                    Cancel
                </Link>
            </Form>
        </Container>
    )
}