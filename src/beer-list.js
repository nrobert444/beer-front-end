import React, { Component } from 'react';
import Beer from './beer-item.js';
import { Link } from 'react-router-dom';
import request from 'superagent';

export default class List extends Component {
    state = { beer: [] }

    async componentDidMount() {
        const data = await request.get(`https://agile-coast-09251.herokuapp.com/api/beers`);
        console.log(data.body);
        if (data.body) {
        this.setState({ beer: data.body })
        }
    }
    render() {
        return (
            <div className = 'beer-list'>
                 <ul>
                    {
                    this.state.beer.map((beer, index) =>
                    <Link to={`/beer/${beer.id}`} key={index}>
                    <Beer beer={beer} key={index} /> 
                    </Link> )
                    }   
                </ul>
            </div>
      );
    }
}