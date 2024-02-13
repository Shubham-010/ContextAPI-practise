import React, { createContext, useContext, useState } from "react";
export default function CounterTemp(props) {
  const { count, setCount } = useContext(props.value);

  function CounterDisplay() {
    return <p>You clicked {count} times</p>;
  }

  function CounterButton() {
    return <button onClick={() => setCount(count + 1)}>Click me</button>;
  }

  return (
    <>
      <CounterDisplay />
      <CounterButton />
    </>
  );
}
