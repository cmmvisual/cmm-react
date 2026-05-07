// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import YouTubeEmbed from '../../components/Reusable/YouTubeEmbed';

// Images Import
import heroImg1 from '../../assets/Refs/Nevio/Nevio-Passaro_Gelato-Musikvideo.jpg'

function Nevio() {


  return (
    <div>

        <SEO 
            title="Portfolio - Gewobag" 
            description="Welcome to my website homepage"
        />

        <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Hero Section Bld von Nevio Passaro - Gelato"></img>
            </div>


        </div>

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="Nevio Passaro - Gelato" 
                paragraphs={[
                    "Für den Künstler Nevio Passaro wurde ich kurzfristig angefragt, das Motion Design für das Musikvideo „Gelato“ von Nevio Passaro & Sista Scoia zu übernehmen. Ein super schöner Sommer-Song, der einfach gute Laune macht. Insgesamt ein richtig tolles Projekt mit einem großartigen Team."

              ]}
              />

            <div className='m-bottom-100'>
                <YouTubeEmbed 
                    videoId="9JyxXsje2gg"
                    title="Nevio Passaro - Gelato"
                    autoplay={true}
                    muted={false}
                    loop={true}
                    startTime={0}
                    />
            </div>


            <div className='portfolio-box bg-green col-black'>

                <div className='long-text'>
                    <h3>Herrausforderung</h3>
                    <p className='col-black'>
Für das Motion Design standen mir nur 2–3 Tage zur Verfügung. Deshalb haben wir uns bewusst für einen reduzierten, minimalistischen Animationsstil entschieden – angelehnt an die Merch- und Social-Grafiken, unter der Art Direction von Verena Haber.                        </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Nevio Passaro</span>
                    </div>
                    <div>
                        <h3>Leistungen</h3>
                        <span>Motion-Graphics</span>
                    </div>
                </div>
            </div>
    
            <section className='text-section-center'>
                <div className='text-content-inner'>
                <h2 className='col-pink'>In zusammenarbeit mit:</h2>
                 <br/>
                <p className='section-paragraph'>
                    <strong>Artist Management, Production Manager, BTS </strong>
                    <br/>
                    Jennifer Belger (First Position Management)
                     <br/> <br/>

                    <strong>Art Direction, Production Manager, BTS</strong>
                    <br/>
                    Verena Haber
                    <br/> <br/>

                    <strong>Director of Photography (DoP)</strong>
                    <br/>
                    Nevio Passaro, Verena Haber, Jennifer Belger
                    <br/> <br/>

                    <strong>Director & Camera </strong>
                    <br/>
                    Leon Hahn
                    <br/> <br/>

                    <strong>Drone </strong>
                    <br/>
                    Angelo Minardi
                    <br/> <br/>

                    <strong>Editing & Color Grading </strong>
                    <br/>
                    Steve Bülow
                    <br/> <br/>

                    <strong>Motion Design </strong>
                    <br/>
                    Catalina Mejia Martinez


                </p>
            </div>
            </section> 
            
              


        </div>

    </div>
        

    <Footer></Footer>

    </div>
  );
}

export default Nevio;