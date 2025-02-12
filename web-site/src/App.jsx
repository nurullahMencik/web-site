import { useState } from "react";
import "./css/app.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Sikayet from "./components/Sikayet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      {" "}
      {/* Tüm sayfayı kapsayan div */}
      <Router>
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/sikayet" element={<Sikayet />} />
          </Routes>
        </main>
        <Footer /> {/* Footer her zaman en altta olacak */}
      </Router>
    </div>
  );
}

export default App;
