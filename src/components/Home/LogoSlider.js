import React from 'react';
import './LogoSlider.css';

const LogoSlider = ({ items = [], direction = 'left', duration = '20s' }) => {
  // Helper to create the individual boxes
  const createItems = (suffix) => 
    items.map((item, index) => 
      React.createElement(
        'div', 
        { key: `${suffix}-${index}`, className: 'logoslider-item' }, 
        // This handles both strings and <img> elements
        item
      )
    );

  // Set the CSS class based on direction
  const animationClass = direction === 'right' ? 'slide-right' : 'slide-left';

  const track = React.createElement(
    'div', 
    { 
      className: `logoslider-track ${animationClass}`,
      style: { animationDuration: duration } 
    }, 
    ...createItems('set1'), 
    ...createItems('set2'),
    ...createItems('set3'),
    ...createItems('set4')
  );

  return React.createElement(
    'div', 
    { className: 'logoslider-container' }, 
    track
  );
};

export default LogoSlider;