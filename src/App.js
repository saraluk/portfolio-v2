import React, { Fragment } from 'react';
import './App.scss';
import Navigation from './sections/NavigationSection';
import Header from './sections/HeaderSection';
import Skills from './sections/SkillsSection';
import Works from './sections/WorksSection';
import Footer from './sections/FooterSection.jsx';
import Contact from './sections/ContactSection';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
