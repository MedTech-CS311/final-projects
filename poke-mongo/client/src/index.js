import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PokemonButton,{editPokemon} from './components/PokemonButton';
import PokemonSearchBar from './components/PokemonSearchBar';
import PokemonCards from './components/PokemonCards';
import PokemonList from './components/PokemonList';
import reportWebVitals from './reportWebVitals';
import PokemonCards from './components/PokemonCards';


ReactDOM.render(
  <React.StrictMode>
    <PokemonButton title ={editPokemon}/>
    <PokemonSearchBar/>

  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
