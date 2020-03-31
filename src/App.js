import React, { useState } from "react";
import Name from "./Name";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      Count: {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Name name="Nirmal" />
    </div>
  );
}
