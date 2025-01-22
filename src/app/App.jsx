import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="container">
      <h1 className="header">React Counter App</h1>
      <p className="count-text">Current count: <span className="count">{count}</span></p>
      <div className="button-container">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;