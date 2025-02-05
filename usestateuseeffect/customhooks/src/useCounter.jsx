import React, {useState} from 'react'

function useCounter() {
  const [count, setcount]= useState(0)
  function Increment() {
    setcount(count + 1)
    
  }
  function Decrement() {
    setcount(count - 1)
    
  }

  return [count, Increment, Decrement]
}

export default useCounter
