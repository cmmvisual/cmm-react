// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import YouTubeEmbed from '../../components/Reusable/YouTubeEmbed';

// Images Import
import heroImg1 from '../../assets/Refs/Jan/Jan-Plewka-Hero.jpg'

function Nevio() {


  return (
    <div>

        <SEO 
            title="Portfolio - Jan Plewka" 
            description="Welcome to my website homepage"
        />

        <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Hero Section Bld von Jan Plewka"></img>
            </div>


        </div>

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="Jan Plewka x Lina Mały - Die schlaksige Windin" 
                paragraphs={[
                    "Für den Künstler Jan Plewka, den ich einige Monate zuvor bei eins seiner Austellung kennenlernen durfte, hatte ich die ehre seine Bilder in seinem Musikvideo zu integrieren.  "

              ]}
              />

            <div className='m-bottom-100'>
                <YouTubeEmbed 
                    videoId="K86LCbrACag"
                    title="
Jan Plewka x Lina Mały - Die schlaksige Windin (Official Music Video)"
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
                        Bei dieser Arbeit ging es vorallem darum seine gemalten Bilder in ein Digitales Format zu bringen welches auch animierbar ist und nicht zu dominant über dem Video liegt. Dadurch enstand eine Animierte Interpretation seiner Bilder
                    </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Jan Plewka</span>
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
                    <strong>Artist Management, Production Manager</strong>
                    <br/>
                    Jennifer Belger (First Position Management)
                     <br/> <br/>

                    <strong>Videoproduktion</strong>
                    <br/>
                    Sven Sindt 
                    <br/> <br/>

                    <strong>Motion Graphics</strong>
                    <br/>
                    Catalina Mejia Martinez
                    <br/> <br/>

                    <strong>Illustration </strong>
                    <br/>
                    Jan Plewka
                    <br/> <br/>


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