import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface Props {
  // any props that come into the component, you don't have to explicitly define children.
  logo: string, 
  title: string, 
  subTitle: JSX.Element, 
  text: string,
}

const Project: FC<Props> = ({ logo, title, subTitle, text }) => {
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
  logo: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  subTitle: PropTypes.any.isRequired, 
  text: PropTypes.string.isRequired,
};

export default Project;