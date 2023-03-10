import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './actions';

function ReduxComponent() {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch();
  return (
    <div>{counter}
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default ReduxComponent