import React from 'react';
import { InView } from 'react-intersection-observer';

const Projects = () => {
  return (
    <section id="projects">
      <InView triggerOnce={true}>
        {({ inView, ref, /* entry */ }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
              
          </div>
        )}
      </InView>
    </section>
  );
};

export default Projects;