import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const experience = [
  {
    name: 'Intercede, Software Engineer',
    start: '2024',
    end: 'PRESENT',
    description: 'Build and maintain critical components used to construct Klaviyo\'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    tags: ['JQuery', 'Vue.js', 'C# .Net MVC', 'Bootstrap'],
  },
  {
    name: 'OLM Systems, Full Stack Software Developer',
    start: '2018',
    end: '2024',
    description: 'Developed and delivered high quality user interfaces and APIs for OLMs Scottish criminal justice and finance web applications using React, Redux, Material UI and GraphQL. Driving UI development of business-critical applications within my team by aiding other members and promoting knowledge sharing between frontend/backend developers and designers.',
    tags: ['C# .Net MVC', 'React', 'Material UI', 'GraphQL'],
  }
];

const Employ = ({ employment: { start, end, name, description, tags }, index }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });

  return (
    <div className={`employment-wrapper ${inView ? 'fadeup-enter-active':'fadeup-enter'}`} ref={ref} style={{ transitionDelay: `${index + 1}00ms` }}>
      <div className="employment-range">
        <div className="range">{`${start} - ${end}`}</div>
      </div>
      <div className="employment-info">
        <h3 className="title">{name}</h3>
        <div className="description">{description}</div>
        <div className="tags">
          <ul>
            {tags.map((tag, index) => (
              <li key={`employment-tag-${index}`} className="tag">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Employ.propTypes = {
  index: PropTypes.number.isRequired,
  employment: PropTypes.shape({
    start: PropTypes.string.isRequired, 
    end: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired 
};

const EmploymentHistory = () => {
  return (
    <section id="employment">
      <div className="content-container">
        {experience.map((employment, index) => (
          <Employ key={`employment-${index}`} employment={employment} index={index} />
        ))}
      </div>
    </section>
  );
};

export default EmploymentHistory;