import React from 'react';
import { InView } from 'react-intersection-observer';
import LAM from '../../images/logo.jpg';
import OLM from '../../images/olmLogoNew(olmBlue).png';
import LIAM from '../../images/LMP.png';

const Associates = () => {
  return (
    <section id="associates">
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
            <div>
              <h1>Check out these companies I&apos;ve worked with...</h1>
            </div>
            <a href="http://www.lamassociates.co.uk/" target="_blank" rel="noreferrer">
              <img alt="LAM Associates" src={LAM} />
            </a>
            <a href="https://www.olmsystems.com/" target="_blank" rel="noreferrer">
              <img alt="OLM" src={OLM} />
            </a>
            <a href="http://www.liammayophotography.co.uk/" target="_blank" rel="noreferrer">
              <img alt="Liam Mayo Photography" src={LIAM} />
            </a>
          </div>
        )}
      </InView>
    </section>
  );
};

export default Associates;