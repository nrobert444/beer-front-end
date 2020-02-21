import React, { Component } from 'react';
import { getBeer } from './api.js'
import Beer from './beer-item.js';

export default class List extends Component {
    state = { beer: {} }
    
    async componentDidMount() {
        const data = await getBeer;
        if (data.body) {
        this.setState({ beer: data.body })
        }
    }
    render() {
        const { beer } = this.state;
        return (
            <Beer beers={ beer } />
      );
    }
}