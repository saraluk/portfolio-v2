import React from 'react';

const Project = ({ imageURL, projectName, link }) => {
  return (
    <a href={link} target='_blank' className='project-container'>
      <div
        className='project-img center-align'
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className='clear-layer'>
          <p className='medium-bolder-header-text light-text-color bolder-text shadow-text'>
            {projectName}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Project;
