import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

import Presentation from './Components/Presentation';
import SocialNetworks from './Components/SocialNetworks';
import Description from './Components/Description';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Tools from './Components/Tools';
import Menu from './Components/Menu';
import ProyectFour from './Components/ProyectFour';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Menu />
          <Presentation />
          <SocialNetworks />
          <Description />
          <AboutMe />
          <Projects />
          <Tools />
        </Route>

        <Route path="/acercaDeMi">
          <Menu />
          <SocialNetworks />
          <AboutMe />
        </Route>

        <Route path="/proyectos">
          <Menu />
          <SocialNetworks />
          <Projects />
        </Route>

        <Route path="/herramientas">
          <Menu />
          <SocialNetworks />
          <Tools />
        </Route>

        <Route path="/lofche">
          <Menu />
          <SocialNetworks />

        </Route>

        <Route path="/guiamuggle">
          <Menu />
          <SocialNetworks />

        </Route>

        <Route path="/gatera">
          <Menu />
          <SocialNetworks />

        </Route>

        <Route path="/burgerqueen">
          <Menu />
          <SocialNetworks />
          <ProyectFour />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
