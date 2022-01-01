import React, { useState, useEffect } from "react";

import axios from "axios";

function AddNewPokemon2() {
  const [name, setName] = useState("");
  const [types, setType] = useState([]);
  const [number, setNumber] = useState(0);
  const [imageUrl, setimageUrl] = useState("");

  const [ListOfPokemons, setListOfPokemons] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:7500/pokemons").then((response) => {
      setListOfPokemons(response.data);
    });
  }, []);
  const createPokemon = () => {
    axios
      .post("http://localhost:7500/pokemons/pokemon", {
        name,
        number,
        types,
        imageUrl,
      })
      .then((response) => {
        setListOfPokemons([...ListOfPokemons, name, number, types, imageUrl]);
        setLoading(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="Number"
        placeholder="number"
        onChange={(event) => {
          setNumber(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="types"
        onChange={(event) => {
          setType(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="imageUrl"
        onChange={(event) => {
          setimageUrl(event.target.value);
        }}
      />
      <button onClick={createPokemon}>Add pokemon</button>
      {/* {ListOfPokemons.map((pokemon) => {
        return (
          <div>
            {" "}
            <p>{pokemon.name}</p> <p>{pokemon.number}</p> <p>{pokemon.types}</p>{" "}
            <img src={pokemon.imageUrl} alt="" />
            <p>{pokemon.imageUrl}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default AddNewPokemon2;
