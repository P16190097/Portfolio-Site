import React from 'react';
import useCanvas from '../../hooks/useCanvas';
import drawHeroPlanet from '../../canvas/planet';
import headshot from '../../images/headshot1.jpg';

const HeroBanner = () => {
  const canvasRef = useCanvas(drawHeroPlanet);

  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-title">
          <img src={headshot} alt="avatar" />
          <div>
            <span className="sun">J</span>
            <span className="mercury">o</span>
            <span className="venus">s</span>
            <span className="earth">h</span>
            <span className="mars">u</span>
            <span className="jupiter">a</span>
            <span> </span>
            <span className="saturn">M</span>
            <span className="uranus">a</span>
            <span className="neptune">y</span>
            <span className="pluto">o</span>
          </div>
          <div className="hero-title-divider"></div>
          <div className="hero-subtitle">Web Developer</div>
        </div>
      </div>
      <canvas className="hero-canvas" ref={canvasRef} />
    </div>
  );
};

export default HeroBanner;