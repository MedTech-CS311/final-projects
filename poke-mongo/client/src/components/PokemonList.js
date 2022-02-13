import React, { Component } from 'react';
import './PokemonList.css'
class PokemonList extends React.Component {
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
    render() { 
        return(
        <div>
           <h2 class="titlePok">List Of Pokemons</h2>
           <ul>
               {this.state.pokemons.map(pokemon => 
                <li key={pokemon.number}>{pokemon.name} <img src={pokemon.imageUrl} width={100} height={100}/> </li>)}
           </ul>    
            </div>
            );
    }
  }

 
export default PokemonList;
