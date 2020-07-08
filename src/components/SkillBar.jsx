import React from 'react';

const SkillBar = ({ width }) => {
  return (
    <div className='skill-slot'>
      <div className='skill-fill' style={{ width: width }}></div>
    </div>
  );
};

export default SkillBar;
