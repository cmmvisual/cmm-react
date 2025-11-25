// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // We'll create this file next for styling

function Navbar() {
  return (
    <div className='navContainer'>
        <nav className="navbar">
            <a href="/" className="navbar-logo">MyPage</a>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>
    
  );
}

export default Navbar;