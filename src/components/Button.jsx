import React from 'react';

const Button = () => {
  return (
    <div className='margin-horizontal'>
      <a href="/file/Saraluk's Resume.pdf" download="Saraluk's Resume">
        <div className='download-button'>
          <p>Download Resume</p>
        </div>
      </a>
    </div>
  );
};

export default Button;
