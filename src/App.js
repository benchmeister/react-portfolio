import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About"
import Skills from "./skills/Skills"
import Projects from "./projects/Projects"
import Contact from "./contact/Contact"
import "./styles/app.css"


function App() {
  return (
    <Router> 
      <Nav />
      <Routes> // this is how to create new pages in React JS
        <Route path="/" element={About} /> // link to about page
        <Route path="/skills" element={Skills} /> // link to skills page
        <Route path="/projects" element={Projects} /> // link to projects page
        <Route path="/contact" element={Contact} /> // link to contact page
      </Routes>
    </Router>
  );
}

export default App;
