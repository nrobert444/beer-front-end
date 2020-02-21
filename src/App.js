import React, { Component } from 'react';
import request from 'superagent';
import Beer from './beer-item.js';
import './App.css';
export default class App extends Component {
    state = { beer: [] }

    async componentDidMount() {
        const data = await request.get(`http://agile-coast-09251.herokuapp.com/api/beers`)
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
