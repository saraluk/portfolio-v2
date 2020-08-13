import React from 'react';
import Icon from '../components/Icon';

const Contact = () => {
  return (
    <div id='contact-section' className='wrapper-container'>
      <div className='contact-container'>
        <div className='placeholder-div' />
        <div className='contact-content-container'>
          <h2 className='medium-header-text'>Contact</h2>
          <div className='contact-detail'>
            <p>saralukkai@gmail.com</p>
            <p>(347)-556-6630</p>
          </div>
          <div>
            <Icon
              link='https://www.linkedin.com/in/saralukkai'
              icon='/icon/linkedin-logo-light.png'
              name='linkedin'
            />
            <Icon
              link='https://github.com/saraluk'
              icon='/icon/github-logo-light.png'
              name='github'
            />
            <Icon
              link='https://www.instagram.com/sralu.x'
              icon='/icon/instagram-logo-light.png'
              name='instagram'
            />
          </div>
        </div>

        <div className='placeholder-div' />
      </div>
    </div>
  );
};

export default Contact;
