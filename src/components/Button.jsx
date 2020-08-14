import React from 'react';

const Button = (props) => {
  return (
    <a href={props.link} download={props.download} className='button'>
      {props.buttonText}
    </a>
  );
};

export default Button;
