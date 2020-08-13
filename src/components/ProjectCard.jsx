import React from 'react';

const ProjectCard = (props) => {
  return (
    <a href={props.link} target='_blank'>
      <div
        className='project-card'
        style={{
          backgroundImage: `url(${props.imageURL})`,
        }}
      ></div>
    </a>
  );
};

export default ProjectCard;
