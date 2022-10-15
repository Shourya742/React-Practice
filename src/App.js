import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component
import { useState, useEffect } from "react";
import useFetch from "./components/useFetch";
function App() {
  const [data] = useFetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
  );
  return (
    <>
      <div className="App">
        <Header />
        {data.map((e, i) => {
          return (
            <div key={i}>
              <h1>e.firstName</h1>
              <h1>e.email</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
