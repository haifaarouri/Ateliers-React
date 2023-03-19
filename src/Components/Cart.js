import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import { addToCart, RemoveItemFromCart, DeleteItem } from '../ReduxToolkit/slices/cartSlice';

export default function Cart() {

  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(RemoveItemFromCart(id));
  };

  const handleDeleteItemFromCart = (id, quantity) => {
    dispatch(DeleteItem({ id, quantity }));
  };

  const calculateTotal = () => {
    const total = items.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0);
    return total.toFixed(2);
  };

  return (
    <section className="h-100 gradient-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center my-4">
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0">
                  Cart - {items.length} items
                </MDBTypography>
              </MDBCardHeader>
              {items.map((item) => (<MDBCardBody key={item.id}>
                <MDBRow>
                  <MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
                    <MDBRipple rippleTag="div" rippleColor="light"
                      className="bg-image rounded hover-zoom hover-overlay">
                      <img
                        src={require("../assets/images/" + item.img)}
                        className="w-100" />
                      <a href="#!">
                        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)", }}>
                        </div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                    <p>
                      <strong>{item.name}</strong>
                    </p>
                    <p>{item.like}</p>
                    <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                      title="Remove item">
                      <MDBIcon fas icon="trash" />
                    </MDBTooltip>
                    <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                      title="Move to the wish list">
                      <MDBIcon fas icon="heart" />
                    </MDBTooltip>
                  </MDBCol>
                  <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                    <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                      <MDBBtn className="px-3 me-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>
                      <MDBInput defaultValue={item.quantity} min={0} type="number" label="Quantity" />
                      <MDBBtn className="px-3 ms-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                    <p className="text-start text-md-center">
                      <strong>{item.price} DT</strong>
                    </p>
                  </MDBCol>
                </MDBRow>
                <hr className="my-4" />
              </MDBCardBody>))}
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}