import React from 'react';
import { InView } from 'react-intersection-observer';
import Project from './project';
import CuddlyIcon from '../../images/projects/final-logo.png';
import NasaIcon from '../../images/projects/nasa-logo.png';
import GraphQLIcon from '../../images/logos/graphql.svg';
import ReactIcon from '../../images/logos/react.svg';

const projectRow1 = [
  {
    logo: CuddlyIcon,
    title: 'Cuddly Bot',
    subTitle: <a href="https://github.com/Cuddly-Engine/cuddly-bot" className="project-link">Check it out</a>,
    text: `A collaborative project in which we created a modular discord bot using Nodejs capable of requesting 
      data from 3rd party APIs to format and display in a Discord server channel.`,
  },
  {
    logo: NasaIcon,
    title: 'ISS tracker',
    subTitle: <><a href="https://github.com/P16190097/Space-Site" className="project-link">Check it out</a> / <a href="https://p16190097.github.io/Space-Site/" className="project-link">Visit the site</a></>,
    text: `A university project where I was tasked with building a web site from scratching with an emphasis on 
      implementing modern web practises and features offered by HTML5, CSS3 and javascript ES6 using mobile 
      first design philosophy.`,
  }
];

const projectRow2 = [
  {
    logo: GraphQLIcon,
    title: 'Synergy Server',
    subTitle: <a href="https://github.com/P16190097/Synergy-Server" className="project-link">Check it out</a>,
    text: `A GraphQL API build to serve as the server-side of the Discord/Slack-esque Synergy application stack, a personal project 
      built to demonstrate how websockets can be used to communicate real time data between a server and client.`,
  },
  {
    logo: ReactIcon,
    title: 'Synergy Client',
    subTitle: <a href="https://github.com/P16190097/Synergy-Client" className="project-link">Check it out</a>,
    text: `A React UI application built to serve as the primary interface for the Synergy stack, a personal project 
      using GraphQL subscriptions to send and receive messages in real-time and secured using Json Web Token authentication.`,
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <InView triggerOnce={true}>
        {({ inView, ref, /* entry */ }) => (
          <div className={inView ? 'content-container fade-in show' : 'content-container fade-in'} ref={ref}>
            {/* <h1>Pet Projects</h1> */}
            <div className="project-row">
              {projectRow1.map((project, index) => (
                <Project 
                  key={`project-${index}`}
                  logo={project.logo}
                  title={project.title}
                  subTitle={project.subTitle}
                  text={project.text}
                />
              ))}
            </div>

            <div className="project-row">
              {projectRow2.map((project, index) => (
                <Project 
                  key={`project-${index}`}
                  logo={project.logo}
                  title={project.title}
                  subTitle={project.subTitle}
                  text={project.text}
                />
              ))}
            </div>
          </div>
        )}
      </InView>
    </section>
  );
};

export default Projects;