import React, { Component } from 'react';
import { getBeer } from './api.js';
import Beer from './beer-item.js';

export default class Detail extends Component {
    state = { beer: {} }

    async componentDidMount () {
        const data = await getBeer(this.props.match.params.beerId);
        console.log(data.body)
        if (data.body) {
            this.setState({ beer: data.body[0] })
        }
    }
    render() {
        console.log(this.state.beer)
        const { beer } = this.state;
        return (
            <Beer beer={beer} />
        );
    }
}