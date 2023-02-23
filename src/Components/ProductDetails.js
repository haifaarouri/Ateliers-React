import React from "react"
import { useParams } from "react-router-dom"
import AllProducts from '../products.json'

export default function ProductDetails(props) { 

  const prodName = useParams()
  console.log(prodName.name)

  return <div className="container">
        {AllProducts.filter(p => p.name === prodName.name).map(p=>(
          <div className="d-flex">
            <div>
              <img src={require('../assets/images/' + p.img)} alt=""/>
            </div>
            <div style={{paddingTop: "5%"}}>
              <h1>{prodName.name}</h1><br/>
              <h3>Description</h3>
              <p>{p.description}</p><br/>
              <h3>Price</h3>
              <p>{p.price} DT</p><br/>
              <h3>Likes</h3>
              <p>{p.like}</p>
            </div>
          </div>
        ))
        }
    </div>;
}