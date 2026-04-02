import React, { useState } from 'react';
import './App.css';

function App() {
  // useState Hook - Initialize counter with 0
  const [count, setCount] = useState(0);

  // Increment Handler - State Updater
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Handler - State Updater  
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Handler
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <div className="counter-card">
        <h1>🔢 Smart Counter</h1>
        
        {/* Dynamic Display - Re-renders on state change */}
        <div className="counter-display">
          <span className="count-number">{count}</span>
        </div>

        {/* Event Handlers - onClick */}
        <div className="buttons">
          <button 
            className="btn decrement" 
            onClick={decrement}
          >
            ➖ Decrease
          </button>
          
          <button 
            className="btn reset" 
            onClick={reset}
          >
            🔄 Reset
          </button>
          
          <button 
            className="btn increment" 
            onClick={increment}
          >
            ➕ Increase
          </button>
        </div>

        <div className="status">
          {count > 0 && `+${count} from start`}
          {count < 0 && `${count} below zero`}
          {count === 0 && "Ready to count!"}
        </div>
      </div>
    </div>
  );
}

export default App;