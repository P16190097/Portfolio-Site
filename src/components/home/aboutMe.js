import React from 'react';
import { InView } from 'react-intersection-observer';

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <InView triggerOnce={true}>
        {({ inView, ref, /* entry */ }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
            <h1>Hi, I&apos;m Josh. <span className="wave">👋</span></h1>
            <p>
                I&apos;m a <span className="highlight">graduate web developer</span> based in Oxfordshire, England. I have a 
                background in web based software for the social care sector and have a passion for UI development and design 
                currently using Nodejs with React, Graphql and Postgres.
            </p>
            <p className={inView ? 'fade-in show' : 'fade-in'}>Got any questions? <a href="mailto:mayoe@live.co.uk">Contact me</a>.</p>
          </div>
        )}
      </InView>
    </section>
  );
};

export default AboutMe;