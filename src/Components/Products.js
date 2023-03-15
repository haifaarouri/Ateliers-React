import Product from "./Product";
import { useEffect, useState } from 'react';
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";

// import { useOutletContext } from "react-router-dom";
import { deleteProduct, getProducts } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { populateProducts } from "../ReduxToolkit/slices/productSlice";
function Products () {
    const products = useSelector((state)=>state.products.products)
    const dispatch= useDispatch();
    const [visible,setVisible]=useState(false)
    const [visible2,setVisible2]=useState(false)
    // const [currentUser] = useOutletContext();
    useEffect(() => {
      // getProducts()
      // .then((res)=>{setProducts(res.data);console.log(res)})
      // .catch((error)=>console.log(error))
      getAllProduct();

    }, [])
    
    const getAllProduct=async()=>{
      await getProducts().then((res)=>dispatch(populateProducts(res.data)));
      // setProducts(res.data);
    }
    const buy=(product)=>{
        product.quantity--;
        setVisible(true);
        setTimeout(()=>{setVisible(false)},2000)
    }
    const deleteProd = async (id) => {
      const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      await deleteProduct(id);
      getAllProduct(); }
  }
    useEffect(() => {
      setVisible2(true);
      setTimeout(()=>{setVisible2(false)},3000)
      return () => {
        console.log("I m unmounting")
      }
    }, [])
    
    
        return ( 
            <Container>
            <Row>
            {/* {currentUser} */}
           {visible2 &&  <Alert variant="success">
            <Alert.Heading>Hey, Welcome To Our Shop <strong> MyStore </strong>    </Alert.Heading>
            <p>
            Thank you for choosing our store, we hope you enjoy your shopping experience!
            </p>
            <hr />
          </Alert>
        }
            {products && products.map((element,index)=>
            
                <Col key={index} >
                <Product product={element} buyFunction={buy} deleteProd={deleteProd}/>
                </Col>
            )}
         {visible &&   <Alert style={{ marginTop: "30px" }} variant="primary">
            <p>
            You Bought an Item
            </p>
             </Alert>}
        </Row>
        </Container> );
    
}
 
export default Products;