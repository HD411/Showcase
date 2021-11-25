import React from 'react';
import Navs from '../components/Nav';
import Carousels from '../components/Carousel';
import LanguagesCards from '../components/LanguagesCards';
import ReactCard from '../components/ReactCard';
import Skills from '../components/AccordionSkills';
import '../styles/generic.css';
import '../styles/style.css';

function Home() {
  return (
    <>
      <h1 className="large-header">Showcase</h1>
      <Navs />
      <Carousels />
      <LanguagesCards />
      <ReactCard />
      <Skills />
    </>
  );
}

export default Home;
