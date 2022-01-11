import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useCanvas from '../../hooks/useCanvas';
import drawHeroPlanet from '../../canvas/planet';
import headshot from '../../images/headshot.jpg';

const HeroBanner = () => {
  const canvasRef = useCanvas(drawHeroPlanet);

  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-title">
          <img src={headshot} alt="avatar" />
          <div>Joshua Mayo</div>
          <div className="hero-title-divider"></div>
          <div className="hero-subtitle">Web Developer</div>
          <div className="hero-icons">
            <a href="mailto:mayoe@live.co.uk" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://github.com/p16190097" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/joshua-mayo-3949a219b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div> 
        </div>
      </div>
      <canvas className="hero-canvas" ref={canvasRef} />
    </div>
  );
};

export default HeroBanner;