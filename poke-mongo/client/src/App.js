import React from "react";

import "./App.css";

import Navbar from "./Components/Navbar.js";

import PokemonList from "./Components/PokemonList.js";

import AddNewPokemon2 from "./Components/AddNewPokemon2.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";



import DeleteAllPokemons from './Components/DeleteAllPokemons.js';
import Filter from './Components/Filter.js';
function App() {
  return (
    <div>
     
      
       <Router>
        <div className="App">
        <Navbar />
          <Routes>
            <Route path="/AddNewPokemons" element={<AddNewPokemon2 />} />
            <Route path="/Viewpokemons" element={<PokemonList />} />
            {/* <Route path="/DeletePokemon" element={<DeleteAllPokemons />} /> */}
           
            <Route path="/DeleteAllPokemon" element={<DeleteAllPokemons/>}/>
            <Route path="/FilterByType" element={<Filter/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
