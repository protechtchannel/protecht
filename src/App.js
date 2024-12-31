import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import i18n from "./languageConfig";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Empowering from "./pages/Empowering";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Impressum from "./pages/Impressum";
import "./App.css";
import "./fonts/Satoshi_Complete/Fonts/WEB/css/satoshi.css";

function App() {
  // Function to change language manually (e.g., from a dropdown or button)
  const changeLanguage = (lang) => {
    const supportedLanguages = ["en", "de"];
    if (supportedLanguages.includes(lang)) {
      i18n.changeLanguage(lang); // Update the language using i18n
    }
  };

  return (
    <div className="App">
      <Header onLanguageChange={changeLanguage} />{" "}
      {/* Pass the language change function */}
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
