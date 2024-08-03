import React from 'react';
import { useInView } from 'react-intersection-observer';
import LAM from '../../images/logo.jpg';
import OLM from '../../images/olmLogoNew(olmBlue).png';
import LIAM from '../../images/LMP.png';
import INTERCEDE from '../../images/intercede small.png';
import PLUMBING from '../../images/logo_small.png';


const AboutMe = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });

  return (
    <section id="about">
      <div className={`content-container fade-in ${inView && 'show'}`} ref={ref}>
        <h2>Hi, I&apos;m Josh. <span className="wave">👋</span></h2>
        {/* <p>
          I&apos;m a <span className="highlight">front-end web developer</span> based in Northamptonshire, England. I have a 
          background in web based software development for the social care sector and have a passion for UI development and out of this world design 
          currently using Nodejs with React, GraphQL and Postgres.
        </p> */}
        <p>
          I&apos;m an accomplished front-end developer based in Northamptonshire with 5+ years&apos;
          experience in software development for the social care sector contributing towards the
          development of ground-breaking software to support finance and Scottish criminal
          justice systems, primarily using Nodejs with React and GraphQL.
        </p>
        <p>
          I am always eager for a challenge and the opportunity to grow my skills through
          experience with a passion using my technical know-how to benefit other people and
          organisations.
        </p>
        <p>
          I have been involved in a number of projects producing websites for local businesses
          looking to increase their visibility and promote their services, some of which you can find below.
        </p>
        <div className="associates">
          {/* <div>
            <h2>In the meantime, check out these companies I&apos;ve worked with...</h2>
          </div> */}
          <a href="http://www.lamassociates.co.uk/" target="_blank" rel="noreferrer">
            <img alt="LAM Associates" src={LAM} />
          </a>
          <a href="https://www.olmsystems.com/" target="_blank" rel="noreferrer">
            <img alt="OLM" src={OLM} />
          </a>
          <a href="https://www.shauncooperplumbing.com/" target="_blank" rel="noreferrer">
            <img alt="Shaun Cooper Plumbing LTD" src={PLUMBING} />
          </a>
          <a href="http://www.liammayophotography.co.uk/" target="_blank" rel="noreferrer">
            <img alt="Liam Mayo Photography" src={LIAM} />
          </a>
          {/* <a href="https://www.intercede.com/" target="_blank" rel="noreferrer">
            <img alt="Intercede" src={INTERCEDE} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;