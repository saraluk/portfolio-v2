import React from 'react';
import Button from '../components/Button';

const AboutSection = () => {
  return (
    <div id='about-section' className='main-container'>
      <div className='content-container'>
        <div className='content-header-container'>
          <p className='large-bold-header-text primary-text-color'>ABOUT ME</p>
        </div>
        <div className='content-about-container'>
          <div className='center-container center-align'>
            <div>
              <p className='medium-bold-header-text small-margin-horizontal'>
                Saraluk Kaiwansakul
              </p>
              <p>
                Software engineering student passionate about building seamless
                and responsive user experience on Web and Mobile using
                JavaScript technologies such as React, React Native, Ionic
                Angular. Strong interest in UX/UI design and excels at using
                Adobe Photoshop & Illustrator.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
