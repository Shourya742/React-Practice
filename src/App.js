import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component

import { useState, createContext } from "react";
import { useEffect, useRef } from "react";

function App() {
  const [input, setInput] = useState("");

  const prevState = useRef("");
  const inputField = useRef();

  useEffect(() => {
    //  setCounter(count + 1);
    prevState.current = input;
  }, [input]);
  const formHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = () => {
    inputField.current.value = "Shourya";
  };

  return (
    <>
      <div className="App">
        <Header />
        <input ref={inputField} value={input} onChange={formHandler} />
        <h4>{`previous state is ${prevState.current}`}</h4>
        <button onClick={clickHandler}> Click Me!!</button>
      </div>
    </>
  );
}

export default App;
