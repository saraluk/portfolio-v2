import React from 'react';
import SkillBar from '../components/SkillBar';

const SkillsSection = () => {
  return (
    <div id='skills-section' className='main-container light-grey-container'>
      <div className='content-container'>
        <div className='content-header-container'>
          <p className='large-bold-header-text primary-text-color'>SKILLS</p>
        </div>
        <div className='content-skills-container'>
          <div className='top-container'>
            <div className='left-container sub-grid padding-vertical'>
              <div>
                <p>HTML</p>
                <SkillBar width={280} />
              </div>
              <div>
                <p>CSS / SCSS / Sass</p>
                <SkillBar width={280} />
              </div>
              <div>
                <p>JavaScript</p>
                <SkillBar width={248} />
              </div>
              <div>
                <p>Node.js</p>
                <SkillBar width={235} />
              </div>
              <div>
                <p>SQL</p>
                <SkillBar width={248} />
              </div>
            </div>
            <div className='right-container sub-grid padding-vertical'>
              <div>
                <p>Java</p>
                <SkillBar width={226} />
              </div>
              <div>
                <p>C#</p>
                <SkillBar width={190} />
              </div>
              <div>
                <p>XML / JSON</p>
                <SkillBar width={260} />
              </div>
              <div>
                <p>Photoshop</p>
                <SkillBar width={280} />
              </div>
              <div>
                <p>Illustrator</p>
                <SkillBar width={265} />
              </div>
            </div>
          </div>
          <div className='bottom-container'>
            <div className='left-container padding-vertical'>
              <p className='small-bold-header-text'>Technologies</p>
              <p>
                ReactJS, React Native, Ionic Angular, Express, Bootstrap,
                Docker, Firebase, AWS
              </p>
            </div>
            <div className='right-container padding-vertical'>
              <p className='small-bold-header-text'>Softwares</p>
              <p>
                MySQL, Mathlab, Unity, Microsoft Office, Adobe XD,
                Pro/Engineering, Solidworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
