import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokemonButton,{addPokemon,editPokemon,deletePokemon} from './components/PokemonButton';
import PokemonSearchBar from './components/PokemonSearchBar';
import PokemonList from './components/PokemonList';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <div id="main_container">
      <h1 id="main_title">POKE-MONGO</h1>
      <PokemonButton title = {addPokemon}/>
      <PokemonButton title = {editPokemon}/>
      <PokemonButton title = {deletePokemon}/>
      <PokemonList/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
