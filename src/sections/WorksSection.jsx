import React from 'react';
import Project from '../components/Project';

const WorksSection = () => {
  return (
    <div id='works-section' className='main-container'>
      <div className='content-container'>
        <div className='content-header-container'>
          <p className='large-bold-header-text primary-text-color'>WORKS</p>
        </div>
        <div className='content-works-container'>
          <div className='project-container'>
            <Project
              imageURL={'/img/Resihub-mobile-app.png'}
              projectName={'ResiHub'}
              link={'https://resihub-reactnative-app.firebaseapp.com/'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'img/Newscapsule-mobile-app.png'}
              projectName={'News Capsule'}
              link={'https://github.com/saraluk/ionic-news-api-app'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'/img/Favdish-mobile-app.png'}
              projectName={'FavDish'}
              link={'https://ionic-favdish-mobile-app.web.app/home'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'/img/Hungry-alarm-app.png'}
              projectName={'Hungry Alarm (In Progress)'}
            />
          </div>

          <div className='project-container'>
            <Project
              imageURL={'img/Responsive-web-design.png'}
              projectName={'Responsive Web Design'}
              link={'https://saraluk-responsive-web-design.web.app'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'/img/Bridget-riley-art.png'}
              projectName={"Bridget Riley's Art"}
              link={'https://canvas-device-motion.web.app'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'/img/Zombieland-2d-game.png'}
              projectName={'Zombie Land'}
              link={'https://saraluk.itch.io/zombie-land-platformer'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'/img/Firerescue-3d-game.png'}
              projectName={'Fire Rescue'}
              link={'https://saraluk.itch.io/fire-rescue'}
            />
          </div>
          <div className='project-container'>
            <Project
              imageURL={'/img/Coming-project.png'}
              projectName={'Coming Soon'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;
