import "./App.css";
import Student from "./components/Student";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component

function App() {
  return (
    <div className="App">
      <Student />
    </div>
  );
}

export default App;
