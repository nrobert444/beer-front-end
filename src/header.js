import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
        <header>
            <img src={this.props.beerhall} alt= "beerhall"/>
            <h1>Welcome to the Beerhall.</h1>
            <h2>Find your favorite beer or add a new one.</h2>
        </header>
        );
    }
}
export default Header;
