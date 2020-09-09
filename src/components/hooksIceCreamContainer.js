import React from 'react'
import { buyIceCream } from '../redux'
import { useDispatch, useSelector } from "react-redux";

function HooksIceCreamContainer() {
  const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Num of ice-cream - {numberOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice-Cream</button>
    </div>
  )
}

export default HooksIceCreamContainer
