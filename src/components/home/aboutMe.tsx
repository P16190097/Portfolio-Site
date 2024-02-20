import React from 'react';
import { InView } from 'react-intersection-observer';

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
            <h1>Hi, I&apos;m Josh. <span className="wave">👋</span></h1>
            <p>
                I&apos;m a <span className="highlight">graduate web developer</span> based in Northamptonshire, England. I have a 
                background in web based software development for the social care sector and have a passion for UI development and out of this world design 
                currently using Nodejs with React, GraphQL and Postgres.
            </p>
            <p className={inView ? 'fade-in show' : 'fade-in'}>Want me on a project? <a href="mailto:mayoe@live.co.uk">Lets talk</a>.</p>
          </div>
        )}
      </InView>
    </section>
  );
};

export default AboutMe;