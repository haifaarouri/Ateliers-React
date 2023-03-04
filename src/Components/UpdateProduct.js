import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { editProduct, getallProducts } from "../service/api";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export default function UpdateProduct() {

    const { prodId } = useParams();
    console.log(prodId)
    const [p, setP] = useState({
        "name": "",
        "price": "",
        "img": "",
        "like": 0,
        "quantity": 0,
        "description": ""
    })
    const navigate = useNavigate()

    useEffect(() => {
        getallProducts(prodId)
            .then((res) => setP(res.data))
            .catch((err) => console.log({ message: "Product does not exist", err }))
    }, [])

    const handleChange = (e) => {
        console.log(e.target.value)
        setP({...p, [e.target.name] : e.target.value})
        console.log(p)
    }

    const handleChangeFile = (e) => {
        console.log(e.target.value)
        setP({ ...p, img: e.target.files[0].name })
        console.log(p)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editProduct(prodId, p)
        .then(() => navigate('/products/list'))
        .catch((err)=> console.log(err))
    }

    return (
        <Container style={{ marginTop: "30px" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Enter the name" name="name" defaultValue={p.name} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter the product description" name="description" defaultValue={p.description} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" defaultValue={p.price} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name="quantity" defaultValue={p.quantity} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" name="img" defaultValue={p.img} onChange={handleChangeFile}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Product
                </Button>
                <Link to={"/products/list"} className="btn btn-secondary" variant="gray" type="reset">
                    Cancel
                </Link>
            </Form>
        </Container>
    )
}