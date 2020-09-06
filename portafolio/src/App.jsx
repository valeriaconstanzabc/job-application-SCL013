import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import Presentation from './Components/Presentation';
import SocialNetworks from './Components/SocialNetworks';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Tools from './Components/Tools';
import Menu from './Components/Menu';
import ProjectFive from './Components/Projects/ProjectFive';
import ProjectFour from './Components/Projects/ProjectFour';
import ProjectThree from './Components/Projects/ProjectThree';
import ProjectTwo from './Components/Projects/ProjectTwo';
import ProjectOne from './Components/Projects/ProjectOne';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Menu />
          <Presentation />
          <AboutMe />
          <Projects />
          <Tools /> 
          <SocialNetworks />
        </Route>

         <Route path="/acercaDeMi">
          <Menu />
          <Header />
          <AboutMe />
          <SocialNetworks />
        </Route>

        <Route path="/proyectos">
          <Menu />
          <Header />
          <Projects />
          <SocialNetworks />
        </Route>

        <Route path="/herramientas">
          <Menu />
          <Header />
          <Tools />
          <SocialNetworks />
        </Route>

        <Route path="/lofche">
          <Menu />
          <Header />
          <ProjectOne />
          <SocialNetworks />
        </Route>

        <Route path="/guiamuggle">
          <Menu />
          <Header />
          <ProjectTwo />
          <SocialNetworks />
        </Route>

        <Route path="/mdlink">
          <Menu />
          <Header />
          <ProjectThree />
          <SocialNetworks />
        </Route>

        <Route path="/burgerqueen">
          <Menu />
          <Header />
          <ProjectFour />
          <SocialNetworks />
        </Route> 
        
        <Route path="/hootiehoo">
          <Menu />
          <Header />
          <ProjectFive />
          <SocialNetworks />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
