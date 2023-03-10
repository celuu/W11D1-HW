import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0)

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;