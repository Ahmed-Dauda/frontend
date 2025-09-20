import React from "react"
import "./App.css"


import { Routes, Route } from "react-router-dom";
import HomePage from "./LandingPage/HomePage";
import Programs from "./school_org/program";
import AboutPage from "./LandingPage/AboutPage";
import ContactPage from "./LandingPage/ContactPage";
import Navbar from "./LandingPage/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
