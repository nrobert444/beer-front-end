import React, { Component } from 'react'
import request from 'superagent';

export default class addBeer extends Component {
        state = {
            styles: [],
            isSeason: true,
            style: 1,
        };
    
        componentDidMount = async () => {
            const styles = await request.get(`https://agile-coast-09251.herokuapp.com/api/styles`);
            
            this.setState({ Styles: styles.body });
        }
        handleNameChange = (e) => {
            this.setState({ name: e.target.value })
        }
    
        handleStyleChange = (e) => {
            console.log(e.target.value)
            this.setState({ style: Number(e.target.value) })
        }
    
        handleAbvChange = (e) => {
            this.setState({ abv: Number(e.target.value) })
        }
    
        handleBreweryChange = (e) => {
            this.setState({ brewery: (e.target.value) })
        }
    
        handleSeasonChange = (e) => {
            const actualBool = e.target.value === 'false' 
                ? false 
                : true
    
            this.setState({ isSeason: actualBool })
        }
    
        handleImageChange = (e) => {
            this.setState({ image: e.target.value })
        }
    
        handleSubmit = async (e) => {
            e.preventDefault();
    
            const newBeer = {
                name: this.state.name,
                brewery: this.state.brewery,
                styleId: this.state.style,
                url: this.state.image,
                abv: this.state.abv,
                isSeason: this.state.isSeason,
            }
            const dbBeer = await request.post(`https://agile-coast-09251.herokuapp.com/api/beers`, newBeer);
    
    
            console.log(dbBeer)
    
            this.props.history.push('/');
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Add a beer!
                        <br/>
                        <label>
                            Name: 
                            <input onChange={this.handleNameChange} />
                        </label>
                        <br/>
                        <label>
                            Style: 
                            <select onChange={ this.handleStyleChange }>
                                { this.state.styles.map(style => <option value={style.id}> 
                                {style.name}
                                </option>)}
                            </select>
                        </label>
                        <br/>
                        <label>
                            Brewery: 
                            <input onChange={this.handleBreweryChange} />
                        </label>
                        <br/>
                        <label>
                            ABV: 
                            <input type='number' onChange={this.handleAbvChange} />
                        </label>
                        <br/>
                        <label>
                            Image: 
                            <input onChange={this.handleImageChange} />
                        </label>
                        <br/>
    
                        <label>
                            Is in season: 
                            <select onChange={this.handleSeasonChange}>
                                <option value="true" >True</option>
                                <option value="false" >False</option>
                            </select>
                        </label>
                        <br />
                    <button>Submit</button>
                    </form>
                </div>
            )
        }
    }