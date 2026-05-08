// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import ScrollToTop from './components/ScrollToTop';

import Gewobag from './Pages/References/Gewobag.js';
import Medieninsider from './Pages/References/Medieninsider.js';
import DRF from './Pages/References/DRF.js';
import Inteam from './Pages/References/Inteam.js';
import Nevio from './Pages/References/Nevio.js';
import JanPlewka from './Pages/References/jan-plewka.js';
import Innovationspreis from './Pages/References/innovationspreis.js';


import Impressum from './Pages/Impressum.js';
import Datenschutz from './Pages/Datenschutz.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/gewobag" element={<Gewobag />} />
          <Route path="/medieninsider" element={<Medieninsider />} />
          <Route path="/drf" element={<DRF/>} />
          <Route path="/inteam" element={<Inteam/>} />
          <Route path="/nevio" element={<Nevio/>} />
          <Route path="/jan-plewka" element={<JanPlewka/>} />
          <Route path="/innovationspreis" element={<Innovationspreis/>} />


          <Route path="/impressum" element={<Impressum/>} />
          <Route path="/datenschutz" element={<Datenschutz/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;