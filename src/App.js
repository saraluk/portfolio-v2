import React, { Fragment } from 'react';
import './App.scss';
import Navigation from './sections/NavigationSection';
import Header from './sections/HeaderSection';
import About from './sections/AboutSection';
import Skills from './sections/SkillsSection';
import Works from './sections/WorksSection';
import Footer from './sections/FooterSection.jsx';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Works />
      <Footer />
    </Fragment>
  );
}

export default App;
