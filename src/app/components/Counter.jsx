"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  //   const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  const [count, setCount] = useState(0);
  console.log("counter component");

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
