// src/components/Reusable/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

function ImageSlider({ images, height = '500px', autoplay = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [currentIndex, autoplay, interval]);

  return (
    <div className="slider-container" style={{ height }}>
      {/* Main Image */}
      <div className="slider-image-wrapper">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow slider-arrow-left" 
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        ‹
      </button>
      
      <button 
        className="slider-arrow slider-arrow-right" 
        onClick={goToNext}
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;