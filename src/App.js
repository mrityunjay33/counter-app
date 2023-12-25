import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount+1);
  }
  const handleDecrement = () => {
    setCount((prevCount) => prevCount-1);
  }

  return (
    <div className='container'>
      <h1>Stopwatch</h1>
      <div>Count: {(count)}</div>
      <br />
      <button onClick={handleIncrement} >Increment</button>
      <button onClick={handleDecrement} >Decrement</button>

    </div>
  );
}

export default App;
