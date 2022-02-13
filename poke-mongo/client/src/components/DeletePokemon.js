import React, { PureComponent } from 'react';
import {useState, useEffect} from 'react' ;
import axios from 'axios'
class DeletePokemon extends React.Component {
    constructor(){
		super();
		this.state={
			pokemons:[{number:0,name:"",types:[],imageUrl:""}]
	  }
	}
    componentDidMount(){
        fetch('./pokemon')
        .then(res => res.json())
        .then(pokemons => this.setState({pokemons}, () => console.log('Pokemons fetched', pokemons)))
    }

    Delete = () => {
        axios.delete('./pokemon/:number', {
            number: this.state.number,
            name: this.state.name,
            types: this.state.types,
            imageUrl: this.state.imageUrl

      })
      .then(res => {
        const pok = this.state.pokemons.filter(c => c.number !== res);
    this.setState({ pok })})
      .catch(error =>console.log(error.message))
    }

    handleDelete = item => {
        const Newpokemons = this.state.pokemons.filter(c => c.number !== item.number);
        this.setState({ pokemons: Newpokemons });
    };
    render() { 
        return(
        <div>
           <h2 class="titlePok">List Of Pokemons</h2>
           <ul>
               {this.state.pokemons.map(pokemon => 
                <li key={pokemon.number}> <div> Name :{pokemon.name} </div> <div> types: {pokemon.types} </div> <img src={pokemon.imageUrl} width={100} height={100}/> <button> Delete </button> 
                <button onClick={this.handleDelete} > Edit </button> </li>)}
           </ul>    
            </div>
            );
    }
  }
    


 
export default DeletePokemon