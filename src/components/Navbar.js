// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll create this file next for styling
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Import Images

import HomeIcon from '../assets/Images/Brandelements/favicon-256.png'

function Navbar() {
  return (
    <div className='navContainer'>
        <nav className="navbar">
            <a href="/" className="navbar-logo">
              <img src={HomeIcon} alt='Logo Character to back to Home Menu' className='logo-nav' />
            </a>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
            </ul>
        </nav>
    </div>
    
  );
}

export default Navbar;