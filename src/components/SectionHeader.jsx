import React from 'react';
const SectionHeader = (props) => {
  return (
    <div
      className='section-header-container'
      style={{ color: props.textColor }}
    >
      <h2>{props.title}</h2>
      <p>{props.subtitle1}</p>
      <p>{props.subtitle2}</p>
    </div>
  );
};

SectionHeader.defaultProps = {
  textColor: '#222222',
};

export default SectionHeader;
