import React from 'react';

const NavigationSection = () => {
  return (
    <nav>
      <div className='placeholder-div' />
      <div className='nav-content-container'>
        <img className='logo' src='/logo.png' alt='logo' />

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
