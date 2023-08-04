import React from 'react';
import Profile from './profile';
import Aboutme from './Aboutme';
import Details from './Details/Details';
import Contactme from './Contatme/Contactme';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
        <Profile/>
        <Aboutme/>
        <Details/>
        <Skills/>
        <Projects/>
        <Contactme/>
        <Footer/>
     
    </div>
  );
}
