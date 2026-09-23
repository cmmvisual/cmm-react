// src/Pages/References/DRF-Luftrettung.js
import React, { useRef, useState } from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import YouTubeEmbed from '../../components/Reusable/YouTubeEmbed';

// Hero Image
// TODO: Placeholder image — replace with the real hero image for this project.
import heroImg1 from '../../assets/Refs/DRF/DRF-Luftrettung_Cover.jpg'

// Self-uploaded videos
import ownVideo1 from '../../assets/Refs/DRF/Videos/TAG-LUFTRETTUNG_1080x1920_LearJet.mp4'
import ownVideo2 from '../../assets/Refs/DRF/Videos/TAG-LUFTRETTUNG_1080x1920_NachtFlug.mp4'
import ownVideo3 from '../../assets/Refs/DRF/Videos/TAG-LUFTRETTUNG_1080x1920_TagFlug.mp4'

import MesseFilmDRF from '../../assets/Refs/DRF/Videos/Messefilm-DRF-Maintenance_Animation.mp4'

const ownVideos = [ownVideo1, ownVideo2, ownVideo3];

function SelfHostedVideo({ src, frameClassName = 'video-frame' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayIconClick = () => {
    videoRef.current?.play();
  };

  return (
    <div className={frameClassName}>
        <video
            ref={videoRef}
            src={src}
            controls
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
  );
}

function DRFLuftrettung() {

  return (
    <div>

        <SEO
            title="DRF Luftrettung – Website | Catalina Mejia Martinez"
            description="Website-Projekt für die DRF Luftrettung. Catalina Mejia Martinez, Berlin."
            keywords="DRF Luftrettung, Website, Interactive Design, Berlin, Catalina Mejia Martinez"
        />

        <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Portfolio DRF Luftrettung Hero Bild"></img>
            </div>
        </div>

        <div className='mainContent'>
            <div className='max-width'>

            <TextSectionCenter title="DRF Luftrettung"
                paragraphs={[
                    // TODO: Placeholder text — replace with the real project description.
                    "Langfristige Betreuung in der Videoproduktion"
              ]}
              />

            <div className='portfolio-box bg-green col-black'>

                <div className='long-text'>
                    <h3>Projekt</h3>
                    <p className='col-black'>
                        Im Rahmen der langfristigen Videobetreuung der DRF Luftrettung habe ich im Auftrag von Movact diverse Animationen, Kampagnenvideos und YouTube-Longformats in Schnitt und Motion Design umgesetzt sowie wiederverwendbare Templates für die Longform-Videos erstellt
                    </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>DRF Luftrettung</span>
                    </div>
                    <div>
                        <h3>Agentur</h3>
                        {/* TODO: Confirm agency for this project. */}
                        <span>Movact</span>
                    </div>
                </div>
            </div>

            <h3 className='col-white text-center section-heading'>Kampagnen-Videos: Immer Startklar</h3>

            {/* Self-uploaded Videos */}
            <div className='video-grid m-bottom-100'>
                {ownVideos.map((src) => (
                    <SelfHostedVideo key={src} src={src} />
                ))}
            </div>

            {/* Standalone Video */}
            <h3 className='col-white text-center section-heading'>Messefilm: DRF Maintenance Animation</h3>
            <div className='m-bottom-100'>
                <SelfHostedVideo src={MesseFilmDRF} frameClassName='video-standalone' />
            </div>

            {/* YouTube Videos */}
            <section className='text-section-center'>
                <div className='text-content-inner'>
                    <h3 className='col-white text-center section-heading'>Longform Videos für Youtube</h3>
                    <p className='section-paragraph'>
                        Im Rahmen einer Kampagne habe ich in Zusammenarbeit mit Steven Siebert von Movact, der Kamera und Rohschnitt übernommen hatte, die Videos fertig geschnitten und die passenden Motion-Graphic-Overlays erstellt.                    
                        </p>
                </div>
            </section>

            
            {/* TODO: Replace videoId="" with the real YouTube video IDs (5 total). */}
            <div className='m-bottom-100 section-gap'>
                <YouTubeEmbed videoId="So8fELiG7Y0" title="DRF Luftrettung Video 1" />
            </div>
            <div className='m-bottom-100'>
                <YouTubeEmbed videoId="o7ZCUxlaViQ" title="DRF Luftrettung Video 2" />
            </div>
            <div className='m-bottom-100'>
                <YouTubeEmbed videoId="vYuVYNSofyo" title="DRF Luftrettung Video 3" />
            </div>
            <div className='m-bottom-100'>
                <YouTubeEmbed videoId="5N9ab9wqCZ0" title="DRF Luftrettung Video 5" />
            </div>

         

        </div>

    </div>


    <Footer></Footer>

    </div>
  );
}

export default DRFLuftrettung;
