import { useState, useMemo } from "react";

const Usememo = () => {
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const IncreaseHandler = () => {
    setCount(count + 1);
  };
  const DecreaseHandler = () => {
    setCount(count - 1);
  };
  return (

      <div>
        <div>
        <h1>USE MEMO</h1>
        <button onClick={IncreaseHandler}>
      Increase
      </button>
      <br/>
      <button onClick={DecreaseHandler}>
         Decrease
      </button>
      <div>Count: {count}</div> 
     <div> Calculation:{calculation}</div> 
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10000000000; i++) {
    num += 1;

  }
  return num;
};

export default Usememo;