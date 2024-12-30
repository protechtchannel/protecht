import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shadows from "./components/Shadows";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Empowering from "./pages/Empowering";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Impressum from "./pages/Impressum";
import languageConfig from "./languageConfig";
import "./App.css";
import "./fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/empowering" element={<Empowering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
