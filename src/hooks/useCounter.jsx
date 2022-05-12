import { useState } from "react";

const useCounter = (valor) => {
  const [counter, setCounter] = useState(valor);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(valor);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
