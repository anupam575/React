import './App.css';
import {useState, useEffect, React} from 'react';
function App() {

  const [count, setcounter] = useState(0)
  const [data, setData] = useState("Ram")
  useEffect( ()=>{
    console.log("component mount")
  },[data])


  function updatecount() {
    setcounter(count + 1)
    


  }
  function updateData() {
    setData("seeta")
  }


  return (
    <>
    <h1>Button clicked {count}</h1>
    <button onClick={updatecount}>Clicked</button>
    <button onClick={updateData}>Update Data</button>
    
    </>
  );

}
export default App;
