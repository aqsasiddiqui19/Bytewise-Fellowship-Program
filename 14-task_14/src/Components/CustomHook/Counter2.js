import React from 'react'
import useCounter from './UseCounter'

function Counter2() {
    const [count, Increment, Decrement] = useCounter(10);
  return (
    
       <div>
      <h1>COUNTER 2</h1>
      <div>Count: {count}</div>
      <button onClick={Increment}>Increase</button>
      <button onClick={Decrement}>Decrease</button>
    </div>
  );
}
export default Counter2
