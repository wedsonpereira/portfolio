import React from "react";
// import "./App.css";
// import About from "./Templates/About";
import StarterTemp from "./Templates/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Templates/Contact";
import Project from "./Templates/Project";
import Resume from "./Templates/Resume";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Project" element={<Project/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/" element={<StarterTemp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
