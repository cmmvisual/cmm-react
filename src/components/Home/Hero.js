// src/components/Hero.js
import './Hero.css';
import HeroCanvas from './HeroCanvas';

function Hero() {
  return (
    <div className="hero-section circular-slider-hero">
      <HeroCanvas />
      <div className="overlay"></div>

      <div className="hero-content circular-content">
        <h1>Design for Humans</h1>
        <p>Catalina Mejia Martinez</p>
        <a className="hero-button" href="https://cmmvisual.webflow.io/">
          Go to Main Page
        </a>
      </div>

    </div>
  );
}

export default Hero;
