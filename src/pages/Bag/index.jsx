import React from 'react'
import {useSelector} from "react-redux"

export function Bag() {
  const bagValue = useSelector(state=> state.bag.value)
  return (
    <div>{bagValue}</div>
  )
}
