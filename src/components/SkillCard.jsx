import React from 'react';

const Card = (props) => {
  return (
    <div className='skill-card'>
      <p className='large-bold-header-text red-text-color'>{props.title}</p>
      <ul>
        {props.list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
