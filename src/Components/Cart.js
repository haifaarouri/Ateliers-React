import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { addToCart, RemoveItemFromCart, DeleteItem } from '../ReduxToolkit/slices/cartSlice';

export function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(RemoveItemFromCart(id));
  };

  const handleAdjustQuantity = (id, quantity) => {
    dispatch(DeleteItem({ id, quantity }));
  };

  const calculateTotal = () => {
    const total = items.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0);
    return total.toFixed(2);
  };

  return (
    <h1>Shopping Cart</h1>
  );
}