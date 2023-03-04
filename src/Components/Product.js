import Card from "react-bootstrap/Card";
import { Component, useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { deleteProduct, getallProducts } from "../service/api";

function Product(props) {

  const [product, setProduct] = useState(props.product)
  const [likes, setLikes] = useState(props.product.like)
  const [list, setList] = useState(props)

  const like = () => {
    setLikes(likes + 1);
  }
  useEffect(() => { console.log("Likes Update") }, [])

  const deleteProd = async (pId, e) => {
    e.preventDefault()
    console.log(pId)
    await deleteProduct(pId)
    .then(res=> {
      console.log({msg : "Product deleted !", result : res.data})
      setList(getallProducts())
    })
    .catch((err) => console.log(err))
  }

  return (
    <Card style={{ width: '18rem' }} className={likes > 5 && 'bestProduct'}>
      <Card.Img variant="top" src={require("../assets/images/" + product.img)} height="200" width="50" />
      <Card.Body>
        <Card.Title><Link to={`/products/${product.id}`}>{product.name}</Link></Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          Price :{product.price}
        </Card.Text>
        <Card.Text>
          Quantity :{product.quantity}
        </Card.Text>
        <Card.Text>
          Likes :{likes}
        </Card.Text>
        <Button variant="primary" onClick={like}>Like</Button>
        <Button variant="info" onClick={() => props.buyFunction(product)} disabled={product.quantity <= 0}>Buy</Button>
        <Link to={"/products/edit/" + product.id} className="btn btn-success">Update Product</Link>
        <Button variant="danger" onClick={(e)=>deleteProd(product.id, e)}>Delet Product</Button>
      </Card.Body>
    </Card>);

}

export default Product;
