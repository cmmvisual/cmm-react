import React from 'react';
import './Softwares.css';

// Import your icons here
import Software01 from '../../assets/Softwares/01_Illustrator.png';
import Software02 from '../../assets/Softwares/02_InDesign.png';
import Software03 from '../../assets/Softwares/03_Photoshop.png';
import Software04 from '../../assets/Softwares/04_After-Effects.png';
import Software05 from '../../assets/Softwares/05_Premiere.png';
import Software06 from '../../assets/Softwares/06_Blender.png';
import Software07 from '../../assets/Softwares/07_Procreate.png';
import Software08 from '../../assets/Softwares/08_Figma.png';
import Software09 from '../../assets/Softwares/09_Framer.png';
import Software10 from '../../assets/Softwares/10_Rive.png';

function Softwares() {
  return (
    <div className="softwares-container">
      
      <div className="icon-row">
        <img src={Software01} alt="Software skill Adobe Illustrator" className="app-icon" />
        <img src={Software02} alt="Software skill Adobe InDesign" className="app-icon" />
        <img src={Software03} alt="Software skill Adobe Photoshop" className="app-icon" />
        <img src={Software04} alt="Software skill Adobe After Effects" className="app-icon" />
        <img src={Software05} alt="Software skill Adobe Premiere" className="app-icon" />
        <img src={Software06} alt="Software skill 3D Blender" className="app-icon" />
        <img src={Software07} alt="Software skill Procreate on the iPad" className="app-icon" />
        <img src={Software08} alt="Software skill Figma for UI Design" className="app-icon" />
        <img src={Software09} alt="Software skill Frame for Prototypes" className="app-icon" />
        <img src={Software10} alt="Software skill Adobe Rive for Webanimations" className="app-icon" />

      </div>
    </div>
  );
}

export default Softwares;