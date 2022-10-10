import "./App.css";
import { Header } from "./Header"; // Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component

import Footer from "./components/Footer";
function App() {
  let name = "Hey";
  return (
    <div className="App">
      <Header />
      <h1>{name}</h1>
      <Footer />
    </div>
  );
}

export default App;
