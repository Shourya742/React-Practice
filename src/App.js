import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component
import { useState, useEffect, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const expensiveCalculation = (num) => {
    for (let i = 0; i < 10000000; i++) {}
    return num;
  };
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  return (
    <>
      <div className="App">
        <Header />
        <button onClick={() => setCount(count + 1)}>Incrment</button>
        <h1>Count: {count}</h1>
        <input onChange={(e) => setName(e.target.value)} />
        <h1>Name: {name}</h1>
      </div>
    </>
  );
}

export default App;
