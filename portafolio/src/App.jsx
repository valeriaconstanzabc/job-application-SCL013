import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Presentation from './Components/Presentation';
import SocialNetworks from './Components/SocialNetworks';
import Description from './Components/Description';
import ButtonMenu from './Components/ButtonMenu';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Presentation />
          <SocialNetworks />
          <Description />
          <ButtonMenu />
          <AboutMe />
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
