import React, { createContext, useContext, useState } from "react";
import CounterTemp from "./ConterButton";
import CounterButton from "./ConterButton";

const CounterContext = createContext();

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  console.log("CDIS", CounterContext);
  console.log("rendered", count);
  return <p>You clicked {count} times</p>;
}

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  console.log("children", count);
  console.log("children1", children);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <div>
        <CounterTemp value={CounterContext} />
      </div>
    </CounterProvider>
  );
}
