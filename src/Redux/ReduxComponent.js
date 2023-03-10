import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './actions'

export default function ReduxComponent() {
    // const counter = useSelector((state)=>state.counter)
    const counter = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>{counter}
        <Button onClick={()=>dispatch(increment(1))}>Increment+</Button>
        <Button onClick={()=>dispatch(decrement(1))}>Decrement-</Button>
    </div>
  )
}