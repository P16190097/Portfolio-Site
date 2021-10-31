import React from 'react';
import { InView } from 'react-intersection-observer';

const Projects = () => {
  return (
    <section id="projects">
      <InView triggerOnce={true}>
        {({ inView, ref, /* entry */ }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
            <h1>My Projects</h1>
            <div className="project-row">
              <div className="project-container">
                <div className="project-icon" />
                <h2>Cuddly Bot</h2>
                <p>
                    This was a collaborative project in which we created a modular discord bot capable of requesting 
                    data from 3rd party APIs to format and display in a Discord server channel.
                </p>
              </div>
              <div className="project-container">
                <div className="project-icon" />
              </div>
            </div>

            <div className="project-row">
              <div className="project-container">
                <div className="project-icon" />
              </div>
              <div className="project-container">
                <div className="project-icon" />
              </div>
            </div>
          </div>
        )}
      </InView>
    </section>
  );
};

export default Projects;