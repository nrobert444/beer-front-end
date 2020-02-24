import React, { Component } from 'react';
export default class Beer extends Component {
    render() {
        const { beer } = this.props;
        const {
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
                    <Link to={`update/${beer.id}`}>Update</Link>
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