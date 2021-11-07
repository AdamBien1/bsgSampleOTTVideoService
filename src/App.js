import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BsgState from "./context/BSG/bsgState";
import { GlobalReset } from './helpers/GlobalReset.style';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Player from './pages/Player/Player';

const App = () => {
  return (
    <Fragment>
      <BsgState>

        <GlobalReset />
        <Router>
              {/* SWITCH START */}
              <Switch>
                <Route  
                  exact
                  path={["/", "/login"]}
                  component={Login}
                  />
                <Route 
                  exact 
                  path="/home"
                  component={Home}
                />
                <Route 
                  exact 
                  path="/player"
                  component={Player}
                />
                <Route
                  component={NotFound}
                  />
              </Switch>
              {/* SWITCH END */}
          </Router>
        </BsgState>
      </Fragment>
  )
}

export default App;
