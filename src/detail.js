import React, { Component } from 'react';
import { getBeer } from './api.js';
import Beer from './beer-item.js';

export default class Detail extends Component {
    state = { beer: {} }

    async componentDidMount () {
        const data = await getBeer(this.props.match.params.beerId);
        console.log(data)
        if (data.body.results) {
            this.setState({ beer: data.body.results[0] })
        }
    }
    render() {
        const { beer } = this.state;
        return (
            <Beer beer={beer} />
        );
    }
}