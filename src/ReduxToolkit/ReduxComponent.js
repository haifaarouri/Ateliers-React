import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slices/counterSlice';

function ReduxToolkitComponent() {
    const counter = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>{counter}
    <button onClick={()=>dispatch(increment(1))}>+</button>
    <button onClick={()=>dispatch(decrement(1))}>-</button>
    </div>
  )
}

export default ReduxToolkitComponent