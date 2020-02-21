import React, { Component } from 'react';
import './App.css'; 
import './Detail.css';
export default class Beer extends Component {
    render() {
        const { beers } = this.props;
        const {
            name,
            brewery,
            style, 
            ABV,
            is_season,
            url,
        } = beers;
        return (
    <div>
        <li>
            <div className = "detail-item">
                    <p>Name: { name }</p>
                    <p><img src={ url } alt={ url }/></p>
                    <p>ABV: { ABV }</p>
                    <p>Brewery: { brewery}</p>
                    <p>style: { style }</p>
                    <p>In Season: { is_season }</p>
            </div>
        </li>
    </div>
        )
    }
}