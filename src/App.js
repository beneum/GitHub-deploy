import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import About from './components/About';
import MainSkills from './components/MainSkills';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Projects from './components/Projects';
import FirstPage from './components/FirstPage';
import Footer from './components/Footer';


function App() {
  const mainSkillsRef = useRef(null);
  const introRef = useRef(null);
  const projectsRef = useRef(null);

  return (     
    <>
      <Nav
        mainSkillsRef={mainSkillsRef}
        introRef={introRef}
        projectsRef={projectsRef}
      ></Nav>
      <Intro ref={introRef}></Intro>
      <Projects ref={projectsRef}></Projects>    
      {/* <FirstPage></FirstPage> */}
      {/* <hr />  */}
      
      {/* <About></About>       */}
      {/* <hr />  */}
      <MainSkills ref={mainSkillsRef}></MainSkills>
      {/* <hr />  */}
      
      {/* <hr />    */}
      <Footer></Footer>
    </>    
  );
}

export default App;
