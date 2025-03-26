"use client";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("counter component");
  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
