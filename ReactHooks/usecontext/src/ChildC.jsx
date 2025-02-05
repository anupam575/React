import React, { useContext } from 'react'
import {data, data1} from './App'

function ChildC() {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
    <>h1 my name is {name} and my gender is {gender}</>
    
    </>
  )
}

export default ChildC;
