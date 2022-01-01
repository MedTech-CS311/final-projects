import axios from 'axios';
import React, { useState, useEffect } from "react";

function DeleteAllPokemons() {

useEffect(() => {
    axios.get("http://localhost:7500/pokemons").then((response) => {
     // setListOfPokemons(response.data);
    });
  }, []);
  const deletePokemon = () => {
    axios
      .delete("http://localhost:7500/pokemon" )
      .then((response) => {
    //    setListOfPokemons([...ListOfPokemons, name, number, types, imageUrl]);
    //     setLoading(false);
      });
  };


  return(

    <button onClick={deletePokemon}>Delete All</button>

        )
}
export default DeleteAllPokemons;






