import React, {useState} from 'react';
import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';
import DeletePokemon from './components/DeletePokemon';
import NavBar from './components/NavBar';

import './App.css';




export default function App (){
    const [active,setActive] = useState("NavBar")
  return (
    <div class="Welcome">
    <div class="header">
      <span class="myLogo"/>
      <h1 class="user">PokemonGo</h1>
    </div>
    <nav>
    <button class="button" onClick={() => setActive("NavBar")}>Home</button>
      <button class="button" onClick={() => setActive("List")}>Pokemon List</button>
      <button class="button" onClick={() => setActive("Add")}>Add Pokemon</button>
      <button class="button" onClick={() => setActive("Delete")}>Pokemon Details</button>
    </nav>
    <div>
    {active === "NavBar" && <NavBar/>}
      {active === "List" && <PokemonList/>}
      {active === "Add" && <AddPokemon/>}
      {active === "Delete" && <DeletePokemon/>}
    
    </div>
    </div>
    
  )

};


