import React, { Component } from 'react';
import moment from "moment";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Clicker from "./clicker";
import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationBro from "./navigation-boi/navigation";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Brendon's Devcamp NavBar</h1>
      <NavigationBro />
        <Router>
          <div>
          
          <Switch>  
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
          <Clicker />
          </div>
        </Router>
        


      </div>



    );
  }
}
