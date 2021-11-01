import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavigationContainer from './navigation/navigation-container';
import Home from "./pages/home";
import About from "./pages/about";
import NoMatch from "./pages/no-match";

export default class App extends Component {

  render() {
  
    return (
      <div className="container">
        <BrowserRouter>
          <div>
          <NavigationContainer />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}