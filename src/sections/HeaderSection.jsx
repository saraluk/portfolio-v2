import React from 'react';
import Button from '../components/Button';

const HeaderSection = () => {
  return (
    <header id='about-section' className='header-container'>
      <div className='placeholder-div' />
      <div className='header-content-container'>
        <div class='text-box'>
          <div>
            <h1 className='heading-primary'>
              <span className='heading-primary-main'>Hello,</span>
              <span className='heading-primary-main'>
                I'm <span className='red-text-color'>Saraluk</span>
              </span>
              <span className='heading-primary-sub'>
                Software Engineer | Frontend Developer
              </span>
            </h1>
            <div className='sub-heading-primary'>
              Computer Science student passionate about building seamless and
              responsive user experience on Web and Mobile using JavaScript
              technologies such as React, React Native, Ionic Angular. Strong
              interest in UX/UI design and excels at using Adobe Photoshop &
              Illustrator.
            </div>
            <Button />
          </div>
        </div>
        {
          // <div className='image-box'>
          //   <img className='heading-image' src='/img/IMG_4317.jpg' alt='me' />
          // </div>
        }
      </div>
      <div className='placeholder-div' />
    </header>
  );
};

export default HeaderSection;
