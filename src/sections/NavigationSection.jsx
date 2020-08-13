import React from 'react';

const NavigationSection = () => {
  return (
    <nav>
      <div className='placeholder-div' />
      <div className='nav-content-container'>
        <div className='medium-bolder-header-text'>&araluk</div>

        <div className='nav-bar'>
          <div className='nav-bar-link'>
            <a className='nav-link' href='#about-section'>
              ABOUT
            </a>
            <a className='nav-link' href='#skills-section'>
              SKILLS
            </a>
            <a className='nav-link' href='#works-section'>
              WORKS
            </a>
            <a className='nav-link' href='#contact-section'>
              CONTACT
            </a>
          </div>
        </div>
      </div>
      <div className='placeholder-div' />
    </nav>
  );
};

export default NavigationSection;
