import "./App.css";
import Header from "./components/Header";
// Cannot Change name and ordering
// if we use small letter then we the compiler take it as a jsx element not as a component
import { useState, useEffect } from "react";
import Home from "../src/components/Home.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import Userdetails from "./components/Userdetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/app" element={<Home />} />
            <Route path="/app/:userId" element={<Userdetails />} />
          </Route>

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
