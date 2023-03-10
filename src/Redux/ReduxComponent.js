import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './actions'

export default function ReduxComponent() {
    const counter = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
  return (
    <div>{counter}
        <Button onClick={()=>dispatch(increment())}>Increment+</Button>
        <Button onClick={()=>dispatch(decrement())}>Decrement-</Button>
    </div>
  )
}