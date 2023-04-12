import React from 'react'
import useCounter from './UseCounter'

function Counter1() {
    const [count, Increment, Decrement] = useCounter(5);
  return (
    
       <div>
      <h1>COUNTER 1</h1>
      <div>Count: {count}</div>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
    </div>
  );
}
export default Counter1
