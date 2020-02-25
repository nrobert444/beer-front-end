import React, { Component } from 'react';
import addBeer from './addBeer.js';
import List from './beer-list.js';
import './App.css';
import Detail from './detail.js';
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router }
  from 'react-router-dom';
import Header from './header.js';
import UpdateBeer from './updateBeer.js';


export default class App extends Component {
    render() {
        return (
          <Router>
            <Header />
              <Link to='/'>Home</Link>
              <Link to='/add'>Add Beer</Link>
            <Switch>
              <Route exact path= '/' component={List} />
              <Route exact path= '/add' component={addBeer} />
              <Route exact path= '/beer/:beerId' component={Detail} />
              <Route exact path= '/update/:beerId' component={UpdateBeer} />

            </Switch>
          </Router>
            )
    }
}
