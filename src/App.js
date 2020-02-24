import React, { Component } from 'react';
import request from 'superagent';
import Beer from './beer-item.js';
import addBeer from './addBeer.js';
import './App.css';
import Detail from './detail.js';

import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router, }
  from 'react-router-dom';


export default class App extends Component {
    state = { beer: [] }

    async componentDidMount() {
        const data = await request.get(`https://agile-coast-09251.herokuapp.com/api/beers`)
        this.setState({ beer: data.body})
    }
    render() {
        return (
          <Router>
            <Switch>
              <Route exact path= '/' component={List} />
              <Route exact path= '/:beerId' component={addBeer} />
            </Switch>
          </Router>
                <ul>
                    {
                    this.state.beer.map((beer, index) =>
                    <Beer beer={beer} key={index} /> )
                    }   
                </ul>
            )
    }
}
