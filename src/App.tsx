// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutContent from "./pages/about";
import ContactContent from "./pages/contact";
import Projects from "./pages/projects";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactContent />} />
      </Routes>
    </Router>
  );
}
