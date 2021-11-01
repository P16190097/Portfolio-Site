import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ logo, title, subTitle, text }) => {
  return (
    <div className="project-container">
      <img src={logo} className="project-icon" />
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <p>
        {text}
      </p>
    </div>
  );
};

Project.propTypes = {
  logo: PropTypes.any, 
  title: PropTypes.string, 
  subTitle: PropTypes.string, 
  text: PropTypes.string,
};

export default Project;