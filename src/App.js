// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Hero from './components/Hero';
import VimeoEmbed from './components/VimeoEmbed'; // Import the component

function App() {
  return (
    <div className="App">
      <Hero />

      {/* We will add the other components here later! */}
      <main className='mainContent'>
        <div className='max-width-900 pad-200'>
        <h1>Welcome to the Main Page Content</h1>
        <VimeoEmbed 
          videoId="1090020661" 
          privateHash="ca88b1bc84" 
          title="My Private Vimeo Video" 
        />
        </div>
      </main>
    </div>
  );
}

export default App;