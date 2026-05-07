import React from 'react';
import './MaincontentImage.css';

function MaincontentImage({ greeting, name, paragraphs, skills, image }) {
  return (
    <div className='profile'>

      <h2 className="h2-maintitle">{greeting}</h2>

      <main className="profile-section">

        <div className="profile-grid">

          <div className="profile-image-container">
            <img 
              src={image} 
              alt={name} 
              className="profile-img"
            />
          </div>

          <div className="profile-text-container">
            
            <div className="bio-text">
              <p>
                {paragraphs[0]}
              </p>
              {paragraphs.slice(1).map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="skills-tag-group">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default MaincontentImage;