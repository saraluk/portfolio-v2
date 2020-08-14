import React from 'react';
import SectionHeader from '../components/SectionHeader';
import SkillCard from '../components/SkillCard';

const SkillsSection = () => {
  const title = 'Skills';
  const subtitle1 = 'Professional in front-end development';
  const subtitle2 = 'with some back-end knowledge and design skill.';
  const textColor = '#ffffff';
  const frontendList = [
    'HTML',
    'CSS / SCSS / Sass',
    'Bootstrap',
    'JavaScript',
    'React.js',
    'React Native',
    'Angular.js',
    'Ionic',
    'Git',
  ];
  const backendList = [
    'Node.js',
    'Express',
    'Java',
    'MongoDB',
    'MySQL',
    'Firebase',
  ];
  const othersList = [
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Adobe XD',
    'C#',
    'Unity',
    'Mathlab',
    'Pro/Engineering',
    'Microsoft Office',
  ];
  return (
    <div id='skills-section' className='container'>
      <div className='clip-background'></div>
      <div className='skills-container'>
        <div className='skills-content-container'>
          <div className='placeholder-div' />
          <div className='wrapper-container'>
            <SectionHeader
              title={title}
              subtitle1={subtitle1}
              subtitle2={subtitle2}
              textColor={textColor}
            />
            <div className='skills-card-container'>
              <SkillCard title='Front-end Development' list={frontendList} />
              <SkillCard title='Back-end Development' list={backendList} />
              <SkillCard title='Design & Others' list={othersList} />
            </div>
          </div>
          <div className='placeholder-div' />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
