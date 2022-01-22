import React from "react";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";


function PokemonList() {
  const [listOfPokemons, setListOfPokemons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7500/pokemons").then((response) => {
      setListOfPokemons(response.data);
    });
  }, []);

const [Number, setNumber] = useState(0);



const deleteOnePokemon = (number) => {

  axios.delete (`http://localhost:7500/pokemons/${number}`)
  .then(()=> {

  })

} 
const EditPokemon = (number) => {
  axios.put(`http://localhost:7500/pokemons/${number}`,{Number: Number})
}

  const navStyle = {
    color: "white",
  };

  return (
    <div>
      <Link to="/FilterByType">Filter Pokemons</Link>
      <Link to="/">Home Page</Link>
      <h1> List Of Pokemons</h1>

      <div className="Poke">
        <span className="name">Name</span>
        {listOfPokemons.map((pokemon) => {
          console.log("test");
          return (
            <div>
             
              {" "}
              <p>{pokemon.name}</p> <p>{pokemon.number}</p>{" "}
              <p>{pokemon.types}</p> <img src={pokemon.imageUrl} alt="" />
              <p>{pokemon.imageUrl}</p>
              <button onClick={()=>deleteOnePokemon(pokemon.number)}>Delete your pokemon </button>
              <button onClick={()=>EditPokemon(pokemon.number)}>Update your pokemon </button>
              <input type="number" placeholder="number" onChange={(event)=> {setNumber(event.target.value)}} />

            </div>
          );
        })}
      </div>

      <div>
        <span className="Number">Number</span>
        {listOfPokemons.map((pokemon) => {
          return <p>{pokemon.number}</p>;
        })}
      </div>

      <div>
        <span className="Type">Type</span>
        {listOfPokemons.map((pokemon) => {
          return <p>{pokemon.types}</p>;
        })}
      </div>

      <div>
        <span className="imgUrl">imgUrl</span>
        {listOfPokemons.map((pokemon) => {
          return <p>{pokemon.imgageUrl}</p>;
        })}
      </div>
     

      
    </div>
  );
}

export default PokemonList;
