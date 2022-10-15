import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component

import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type == "INC") {
    return state + 2;
  } else if (action.type == "DEC") {
    return state - 2;
  } else {
    return state * 2;
  }

  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div className="App">
        <Header />
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
      </div>
    </>
  );
}

export default App;
