import React, {useState} from 'react';
import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';
import NavBar from './components/NavBar';

import './App.css';



export default function App (){
    const [active,setActive] = useState("NavBar")
  return (
    <div>
        <span class="myLogo"/>
        <h1 class="user">PokemonGo</h1>
      
    
      <nav>
        <button class="button" onClick={() => setActive("NavBar")}>Welcome</button>
        <button class="button" onClick={() => setActive("List")}>Pokemon List</button>
        <button class="button" onClick={() => setActive("Add")}>Add Pokemon</button>
        
      </nav>
      <div>
        {active === "NavBar" && <NavBar/>}
        {active === "List" && <PokemonList/>}
        {active === "Add" && <AddPokemon/>}
        
      
      
      </div>
      
    </div>
    
    
  )

};


