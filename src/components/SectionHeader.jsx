import React from 'react';
const SectionHeader = (props) => {
  return (
    <div className='section-header-container'>
      <h2>{props.header}</h2>
    </div>
  );
};

export default SectionHeader;
