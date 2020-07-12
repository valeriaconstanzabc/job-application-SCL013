import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Presentation from './Components/Presentation';
import SocialNetworks from './Components/SocialNetworks';
import Description from './Components/Description';
import Menu from './Components/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Presentation />
          <SocialNetworks />
          <Description />
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
