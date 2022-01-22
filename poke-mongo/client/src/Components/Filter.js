import Axios from 'axios';
import React, { useState, useEffect } from "react";

export default function Filter() {
    const [listOfPokemons, setListOfPokemons] = useState([]);
  
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      Axios.get("http://localhost:7500/pokemons").then((response) => {
        setListOfPokemons(response.data);
      });
    }, []);
  
    return (
      <div><input
      type="text"
      placeholder="Search Author ..."
      onChange={(event) => {
        setSearchTerm(event.target.value);
      }}
    />
    <button>Search</button>

    {listOfPokemons
      .filter((user) => {
        if (searchTerm == "") {
        } else if (
          user.types[0].toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return user;
        }
      })
      .map((user, key) => {
        return (  
        <div className="user" key={key}>
        <p>author: {user.types}</p>
        <p>title: {user.number}</p>
        <p>comments: {user.name}</p>
        <p>Points: {user.imageUrl}</p>
      </div>
    );
  })}
</div>
);
}

