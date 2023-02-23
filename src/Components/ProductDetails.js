import React from "react"

export default function ProductDetails(props) {
  return <>
        <img src={require('../assets/images/' + props.prod.img)} alt=""/>
        <h1>{props.prod.name}</h1>
        <h2>Description</h2>
        <p>{props.prod.description}</p>
        <h2>Price</h2>
        <p>{props.prod.price} DT</p>
        <h2>Likes</h2>
        <p>{props.prod.like}</p>
    </>;
}