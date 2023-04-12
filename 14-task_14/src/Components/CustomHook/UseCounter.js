import { useState } from "react";

const useCounter = (intialvalue = 0) => {
  const [count, setCount] = useState(intialvalue);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return [count, Increment, Decrement]
};

export default useCounter;
