import React, {useState} from 'react';
import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';
import './App.css';

export default function App (){
    const [active,setActive] = useState("Add")
  return (
    <div>
      <div class="header">
        <span class="myLogo"/>
        <h1 class="user">PokemonGo</h1>
      </div>
      <nav>
        <button class="button" onClick={() => setActive("List")}>Pokemon List</button>
        <button class="button" onClick={() => setActive("Add")}>Add Pokemon</button>
      </nav>
      <div>
        {active === "List" && <PokemonList/>}
        {active === "Add" && <AddPokemon/>}
      
      
      </div>
      
    </div>
    
    
  )

};


