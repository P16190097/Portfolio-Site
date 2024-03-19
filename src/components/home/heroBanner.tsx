import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navDelay, loaderDelay } from '@utils';
import useCanvas from '../../hooks/useCanvas';
import drawHeroPlanet from '../../canvas/planet';
// import headshot from '../../images/headshot1.jpg';

const HeroBanner = () => {
  const canvasRef = useCanvas(drawHeroPlanet);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2>
    <span className="sun">J</span>
    <span className="mercury">o</span>
    <span className="venus">s</span>
    <span className="earth">h</span>
    <span className="mars">u</span>
    <span className="jupiter">a</span> 
    &nbsp;
    <span className="saturn">M</span>
    <span className="uranus">a</span>
    <span className="neptune">y</span>
    <span className="pluto">o</span>
    <span className="sun">.</span>
  </h2>;
  const three = <h3 className="hero-subtitle">I make websites go brrr.</h3>;
  const four = <p>I&apos;m a front-end web developer with a background in web based software 
    development for the social care sector and have a passion for UI development and 
    out of this world design currently using Nodejs with <span className="highlight">React, GraphQL and Postgres</span>.</p>;

  const items = [one, two, three, four];

  return (
    <section id="home">
      <div className="hero-overlay">
        <div className="hero-title">
          {/* <img src={headshot} alt="avatar" /> */}
          <TransitionGroup component={null}>
            {isMounted  && 
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))
            }
          </TransitionGroup>
          {/* <div className="hero-title-divider"></div> */}
        </div>
      </div>
      <canvas className="hero-canvas" ref={canvasRef} />
    </section>
  );
};

export default HeroBanner;