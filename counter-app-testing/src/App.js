import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0)

const handleAdd=()=>{
  setCount(prev=>prev+5)
}

const handleReduce=()=>{
  setCount(prev=>prev-5)
}

  return (
    <div className="App">
        <Button handleAdd={handleAdd} handleReduce={handleReduce}  count={count}/>
    </div>
  );
}

export default App;
