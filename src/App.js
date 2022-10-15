import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component
import ComA from "./components/ComA";
import { useState, createContext } from "react";

const AppState = createContext();

function App() {
  const [data, setData] = useState("Huhahah");
  const [name, setName] = useState({ name: "Shourya", age: "infinity" });
  return (
    <>
      <AppState.Provider value={{ data, name }}>
        <div className="App">
          <Header />
          <ComA />
        </div>
      </AppState.Provider>
    </>
  );
}

export default App;
export { AppState };
