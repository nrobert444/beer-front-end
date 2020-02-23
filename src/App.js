import React, { Component } from 'react';
import request from 'superagent';
import Beer from './beer-item.js';
import './App.css';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom'; 
export default class App extends Component {
    state = { beer: [] }

    async componentDidMount() {
        const data = await request.get(`https://agile-coast-09251.herokuapp.com/api/beers`)
        this.setState({ beer: data.body})
    }
    render() {
        return (
                <ul>
                    {
                    this.state.beer.map((beer, index) =>
                    <Beer beer={beer} key={index} /> )
                    }   
                </ul>
            )
    }
}
