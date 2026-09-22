// src/Pages/About.js
import React, { useRef, useState } from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import ScrollReveal from '../../components/Reusable/ScrollReveal';

// Images Import
import heroImg1 from '../../assets/Refs/Volarex/Volarex-Cover.png'

// Case Video
import caseVideo from '../../assets/Refs/Volarex/Volarex-Case.mp4'

// Slider Images (Concept)
import ConceptImg01 from '../../assets/Refs/Volarex/Concept_01.jpg'
import ConceptImg02 from '../../assets/Refs/Volarex/Concept_02.jpg'
import ConceptImg03 from '../../assets/Refs/Volarex/Concept_03.jpg'
import ConceptImg04 from '../../assets/Refs/Volarex/Concept_04.jpg'
import ConceptImg05 from '../../assets/Refs/Volarex/Concept_05.jpg'
import ConceptImg06 from '../../assets/Refs/Volarex/Concept_06.jpg'

// Moodboard Images
import MoodImg01 from '../../assets/Refs/Volarex/Mood_01.jpg'
import MoodImg02 from '../../assets/Refs/Volarex/Mood_02.jpg'
import MoodImg03 from '../../assets/Refs/Volarex/Mood_03.jpg'

function Volarex() {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Native control bar sits in the bottom ~40px of the video — let clicks
  // there fall through to the browser's own play/pause button instead of
  // double-toggling.
  const handleVideoClick = (e) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = video.getBoundingClientRect();
    const controlsHeight = 40;
    if (e.clientY > rect.bottom - controlsHeight) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handlePlayIconClick = () => {
    videoRef.current?.play();
  };

  return (
    <div>

        <SEO
            title="Volarex – Art Direction & Motion Design | Catalina Mejia Martinez"
            description="Konzept, Moodboard und Art Direction für Volarex. Catalina Mejia Martinez, Berlin."
            keywords="Volarex, Art Direction, Konzept, Moodboard, Motion Graphics, Berlin, Catalina Mejia Martinez"
        />

        <div className='ref-hero'>
            <div>
                <img src={MoodImg03} alt="Hero Bild Volarex"></img>
            </div>
        </div>

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="Volarex - teambahn"
                paragraphs={[
                    // TODO: Placeholder text — replace with the real project description.
                    "Für Volarex habe ich Konzept, Art Direction und Motion Design eines Werbevideos übernommen. Basierend auf einem eigenen Moodboard entstanden erste Styleframes, die ich zu einer stimmigen Animation inklusive Sound Design verfeinert habe."
              ]}
              />

            <h3 className='col-white'>Mood-Board Inspiration</h3>

            <div className='image-gallery image-gallery--ratio-square m-bottom-100'>
                <img src={MoodImg01} alt="Volarex Moodboard 01"></img>
                <img src={MoodImg02} alt="Volarex Moodboard 02"></img>
                <img src={MoodImg03} alt="Volarex Moodboard 03"></img>
            </div>

            <div className='portfolio-box bg-green col-black'>

                <div className='long-text'>
                    <h3>Projektbeschreibung</h3>
                    <p className='col-black'>
                        {/* TODO: Placeholder text — replace with the real project challenge. */}
Erstellung eines fokussierten Social-Media-Werbevideos für Volarex zur Aufmerksamkeitssteigerung ihrer Nischen-Jobplattform in der Bahnbranche und Präsentation ihrer eigenen Produkte.                    </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Volarex</span>
                    </div>
                    <div>
                        <h3>Leistungen</h3>
                        <span>Art Direction</span>
                        <span>Motion-Design</span>
                    </div>
                </div>
            </div>

            <h3 className='col-white'>Styleframe</h3>

            <div className='image-gallery image-gallery--ratio-9-16 m-bottom-100'>
                <img src={ConceptImg01} alt="Volarex Konzept 01"></img>
                <img src={ConceptImg02} alt="Volarex Konzept 02"></img>
                <img src={ConceptImg03} alt="Volarex Konzept 03"></img>
                <img src={ConceptImg04} alt="Volarex Konzept 04"></img>
                <img src={ConceptImg05} alt="Volarex Konzept 05"></img>
                <img src={ConceptImg06} alt="Volarex Konzept 06"></img>
            </div>

            <h3 className='col-white text-center'>Finale Animation</h3>

            <ScrollReveal className='video-showcase m-bottom-100'>
                <div className='video-frame'>
                    <video
                        ref={videoRef}
                        src={caseVideo}
                        controls
                        onClick={handleVideoClick}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />
                    {!isPlaying && (
                        <div className='video-play-overlay' onClick={handlePlayIconClick}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="#0a0a1a">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    )}
                </div>
            </ScrollReveal>

    
        </div>

    </div>


    <Footer></Footer>

    </div>
  );
}

export default Volarex;
