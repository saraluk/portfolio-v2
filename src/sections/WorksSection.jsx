import React from 'react';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const WorksSection = () => {
  return (
    <div id='works-section' className='wrapper-container'>
      <SectionHeader header='Works' />
      <div className='works-container'>
        <div className='placeholder-div' />
        <div className='works-content-container'>
          <ProjectCard
            imageURL={'/img/Resihub-mobile-app.png'}
            projectName={'ResiHub'}
            link={'https://resihub-reactnative-app.firebaseapp.com/'}
          />

          <ProjectCard
            imageURL={'img/Newscapsule-mobile-app.png'}
            projectName={'News Capsule'}
            link={'https://github.com/saraluk/ionic-news-api-app'}
          />

          <ProjectCard
            imageURL={'/img/Favdish-mobile-app.png'}
            projectName={'FavDish'}
            link={'https://ionic-favdish-mobile-app.web.app/home'}
          />

          <ProjectCard
            imageURL={'/img/Hungry-alarm-app.png'}
            projectName={'Hungry Alarm (In Progress)'}
          />

          <ProjectCard
            imageURL={'img/Responsive-web-design.png'}
            projectName={'Responsive Web Design'}
            link={'https://saraluk-responsive-web-design.web.app'}
          />

          <ProjectCard
            imageURL={'/img/Bridget-riley-art.png'}
            projectName={"Bridget Riley's Art"}
            link={'https://canvas-device-motion.web.app'}
          />

          <ProjectCard
            imageURL={'/img/Zombieland-2d-game.png'}
            projectName={'Zombie Land'}
            link={'https://saraluk.itch.io/zombie-land-platformer'}
          />

          <ProjectCard
            imageURL={'/img/Firerescue-3d-game.png'}
            projectName={'Fire Rescue'}
            link={'https://saraluk.itch.io/fire-rescue'}
          />

          <ProjectCard
            imageURL={'/img/Coming-project.png'}
            projectName={'Coming Soon'}
          />
        </div>

        <div className='placeholder-div' />
      </div>
    </div>
  );
};

export default WorksSection;
