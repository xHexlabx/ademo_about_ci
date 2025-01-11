import { useState } from 'react';

export default function useCounter() {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState(1);

  function increment() {
    setCount((count) => count + val);
  }

  return { count, increment, val, setVal };
}
