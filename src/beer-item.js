import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Beer extends Component {
    render() {
        const { beer } = this.props;
        const {
            id,
            name,
            brewery,
            style, 
            ABV,
            url,
            is_season,
        } = beer;
        return (
    <div>
        <li>
            <div className = "detail-item">
                    <p>Name: { name }</p>
                    <Link to={`update/${id}`}>Update</Link>
                    <p><img src={ url } alt={ url }/></p>
                    <p>ABV: { ABV }</p>
                    <p>Brewery: { brewery }</p>
                    <p>style: { style }</p>
                    <p>In Season: { is_season }</p>
            </div>
        </li>
    </div>
        )
    }
}