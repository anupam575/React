import { useMemo } from 'react';
import './App.css';
import React, {useState} from 'react';
function App() {
  const [add, setAdd]= useState(0);
  const [minus, setMinus]= useState(100)
  const multiplication=useMemo(function multiply(){
    console.log("******")
    return add*10;
  },[add])
  return (
    <div className='App'>
      <h1>Learning useMemo</h1>
      {multiplication}<br/>
      <button onClick={()=>setAdd(add + 1)}>Addition</button>
      <span>{add}</span><br/>
      <button onClick={()=>setMinus(minus - 1)}>Subtraction</button>
      <span>{minus}</span><br/>


    </div>
  )
}
export default App;