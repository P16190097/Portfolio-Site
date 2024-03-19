import React from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { ExternalIcon, GithubIcon } from '@components/icons';
import CuddlyIcon from '../../images/projects/final-logo.png';
import PortfolioIcon from '../../images/thumbnail.png';
import NasaIcon from '../../images/projects/nasa-logo.png';
import GraphQLIcon from '../../images/logos/graphql.svg';
import ReactIcon from '../../images/logos/react.svg';

const projectsList = [
  {
    logo: CuddlyIcon,
    title: 'Cuddly Bot',
    githubLink: 'https://github.com/Cuddly-Engine/cuddly-bot',
    externalLink: null,
    text: `A modular discord bot built using Nodejs to request data from 3rd party APIs, 
      format and then post to a Discord server channel.`,
    tags: ['Discord', 'Nodejs']
  },
  {
    logo: PortfolioIcon,
    title: 'Portfolio site',
    githubLink: 'https://github.com/joshmayo/Portfolio-Site',
    externalLink: 'https://joshmayo.dev',
    text: 'My new portfolio site to show off my stuff built with Gatsby, Typescript and SASS',
    tags: ['Gatsby', 'Typescript', 'SASS']
  },
  {
    logo: NasaIcon,
    title: 'ISS tracker',
    githubLink: 'https://github.com/joshmayo/Space-Site',
    externalLink: 'https://joshmayo.github.io/Space-Site/',
    text: 'A simple website built to demonstrate mobile first design philosophy with HTML5 and CSS3 features',
    tags: ['Mobile first design', 'HTML5', 'CSS3']
  },
  {
    logo: GraphQLIcon,
    title: 'Synergy Server',
    githubLink: 'https://github.com/joshmayo/Synergy-Server',
    externalLink: null,
    text: `A GraphQL API to serve as the Discord/Slack-esque Synergy application, a personal project built to 
      demonstrate how websocket connections can power chat logs.`,
    tags: ['Nodejs', 'GraphQL', 'Sequalize']
  },
  {
    logo: ReactIcon,
    title: 'Synergy Client',
    githubLink: 'https://github.com/joshmayo/Synergy-Client',
    externalLink: null,
    text: `A React application built to serve as the interface for the Synergy backend, a personal project which
      uses GraphQL subscriptions to power chat feeds and secured using Json Web Token authentication.`,
    tags: ['Reactjs', 'Apollo GraphQL']
  }
];

const Project = ({ project: { logo, title, githubLink, externalLink, text, tags }, index }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div className={`project-container ${inView ? 'fadeup-enter-active':'fadeup-enter'}`} ref={ref} style={{ transitionDelay: `${index + 1}00ms` }}>
      <div className="project-inner">
        <div className="project-header">
          <div className="project-top">
            <div>
              <img src={logo} className="project-icon" />
            </div>
            <div className="project-links">
              {githubLink && <a href={githubLink} target="_blank" rel="noreferrer"><GithubIcon /></a>}
              {externalLink && <a href={externalLink} target="_blank" rel="noreferrer"><ExternalIcon /></a>}
            </div>
          </div>
          <div className="project-title">
            <h2><a href={githubLink}>{title}</a></h2>
          </div>
          <div className="project-description">
            <p>
              {text}
            </p>
          </div>
        </div>
        <div className="project-footer">
          <ul>
            {tags && tags.map((tag, i) => (
              <li key={`tag-${i}`}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    logo: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    githubLink: PropTypes.string.isRequired, 
    externalLink: PropTypes.string, 
    text: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="content-container">
        {projectsList &&
            projectsList.map((project, i) => (
              <Project 
                key={`project-${i}`}
                index={i}
                project={project}
              />
            ))}
      </div>
    </section>
  );
};

export default Projects;