import React from 'react';
import SEO from '../../components/SEO';
import '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import YouTubeEmbed from '../../components/Reusable/YouTubeEmbed';

// Images Import
// import heroImg1 from '../../assets/Refs/BBU/BBU-Verbandstag-Hero.jpg'

function BBUVerbandstag() {

  return (
    <div>

        <SEO
            title="BBU Verbandstag 2025 – Mapping & On-Air-Design | Catalina Mejia Martinez"
            description="Mapping und On-Air-Design für den BBU Verbandstag – Live-Stream-Grafiken und Postproduktion mit Expressions-gesteuerten Animationen. Art Direction Berlin."
            keywords="BBU Verbandstag, Mapping, On-Air-Design, Motion Graphics, Live-Stream, Postproduktion, Event Design, Berlin, Catalina Mejia Martinez"
        />

        {/* <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Hero Section BBU Verbandstag"></img>
            </div>
        </div> */}

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="BBU Verbandstag 2025"
                paragraphs={[
                    "Im Rahmen des BBU Verbandstags war ich für das Mapping sowie das On-Air-Design verantwortlich – sowohl für den Live-Stream als auch für die Postproduktion. Anbei ein Sneak-Peak von der Veranstaltung, geschnitten von Steven Siebert."
              ]}
              />

            <div className='m-bottom-100'>
                <YouTubeEmbed
                    videoId="fyX5SaArmao"
                    title="BBU Verbandstag"
                    startTime={0}
                />
            </div>

            <div className='portfolio-box bg-green col-black'>

                <div className='long-text'>
                    <h3>Herausforderung</h3>
                    <p className='col-black'>
                        Da Text und Vertonung erst kurz vor dem Event finalisiert wurden, war ein smartes Workflow-Design nötig: Die Icon-Animationen wurden simpel gehalten, jedoch über Expressions direkt an die Tonspur gekoppelt. So reagierte die Grafik live auf die Stimme und sorgte trotz des engen Zeitplans für ein dynamisches Zusammenspiel.
                    </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>BBU</span>
                    </div>
                    <div>
                        <h3>Agentur</h3>
                        <span>Movact</span>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <Footer></Footer>

    </div>
  );
}

export default BBUVerbandstag;
