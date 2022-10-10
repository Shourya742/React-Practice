import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component
import { useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  function inc() {
    setNum(num + 1);
  }
  function dec() {
    setNum(num - 1);
  }
  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons">
          <button className="btn" onClick={inc}>
            increment
          </button>
          <button className="btn" onClick={dec}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
