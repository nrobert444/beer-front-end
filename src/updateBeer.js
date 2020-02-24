import React, { Component } from 'react'
import request from 'superagent';

export default class UpdateBeer extends Component {
        state = {
            styles: [],
            
        };
    
        componentDidMount = async () => {
            const styles = await request.get(`https://agile-coast-09251.herokuapp.com/api/styles`);
            
            this.setState({ styles: styles.body });

            const beer = await request.get(`https://agile-coast-09251.herokuapp.com/api/beer/${this.props.match.params.beerId}`);
            
            const beerToUpdate = beer.body[0];

            this.setState({
                name: beerToUpdate.name,
                brewery: beerToUpdate.brewery,
                style_id: beerToUpdate.style,
                url: beerToUpdate.image,
                abv: beerToUpdate.abv,
                is_season: beerToUpdate.is_season,
            });
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
    
            this.setState({ is_season: actualBool })
        }
    
        handleImageChange = (e) => {
            this.setState({ image: e.target.value })
        }
        
        handleDelete = async() =>{
            await request.delete(`https://agile-coast-09251.herokuapp.com/api/beer/${this.props.match.params.beerId}`);

            this.props.history.push('/');

        }
    
        handleSubmit = async (e) => {
            e.preventDefault();
    
            const newBeer = {
                name: this.state.name,
                brewery: this.state.brewery,
                style_id: this.state.style,
                url: this.state.image,
                abv: this.state.abv,
                is_season: this.state.is_season,
                id: Number(this.props.match.params.id)
            }
            const updateBeer = await request.put(`https://agile-coast-09251.herokuapp.com/api/beers`, newBeer);
    
    
            console.log(updateBeer)
    
            this.props.history.push('/');
        }
    
        render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Update a beer!
                        <br/>
                        <label>
                            Name: 
                            <input value={this.state.name} onChange={this.handleNameChange} />
                        </label>
                        <br/>
                        <label>
                            Style: 
                            <select value={this.state.style} onChange={ this.handleStyleChange }>
                                { this.state.styles.map(style => <option value={style.id}> 
                                {style.name}
                                </option>)}
                            </select>
                        </label>
                        <br/>
                        <label>
                            Brewery: 
                            <input value ={this.state.brewery} onChange={this.handleBreweryChange} />
                        </label>
                        <br/>
                        <label>
                            ABV: 
                            <input type='number' value={this.state.abv} onChange={this.handleAbvChange} />
                        </label>
                        <br/>
                        <label>
                            Image: 
                            <input onChange={this.handleImageChange} />
                        </label>
                        <br/>
    
                        <label>
                            Is in season: 
                            <select value={this.state.is_season} onChange={this.handleSeasonChange}>
                                <option value='true' >True</option>
                                <option value='false' >False</option>
                            </select>
                        </label>
                        <br />
                    <button>Submit</button>
                    </form>
                    <button onClick={this.handleDelete}>Delete</button>

                </div>
            )
        }
    }