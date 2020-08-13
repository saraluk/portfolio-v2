import React from 'react';

const Icon = (props) => {
  return (
    <a className='icon-list' href={props.link} target='_blank'>
      <img className='icon' src={props.icon} alt={props.name} />
      <p>{props.name}</p>
    </a>
  );
};

export default Icon;
