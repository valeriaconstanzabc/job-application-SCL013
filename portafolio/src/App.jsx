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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
