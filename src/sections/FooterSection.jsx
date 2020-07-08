import React from 'react';

const FooterSection = () => {
  return (
    <footer className='footer-container dark-grey-container'>
      <div className='single-row-column-content-container'>
        <div className='content-footer-container light-text-color'>
          <div className='left-container'>
            <p className='bold-500-text '>Contacts</p>
            <p className='bold-500-text'>saralukkai@gmail.com</p>
            <div className='icon-container margin-top'>
              <a href='https://www.linkedin.com/in/saralukkai' target='_blank'>
                <img src='/icon/linkedin-logo-light.png' alt='' />
              </a>
              <a href='https://github.com/saraluk' target='_blank'>
                <img src='/icon/github-logo-light.png' alt='' />
              </a>
              <a href='https://www.instagram.com/sralu.x' target='_blank'>
                <img src='/icon/instagram-logo-light.png' alt='' />
              </a>
            </div>
          </div>
          <div className='right-container right-align'>
            <p className='bold-500-text'>
              © Saraluk Kaiwansakul 2019 - All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
