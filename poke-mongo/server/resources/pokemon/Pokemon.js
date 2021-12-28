const mongoose= require("mongoose")
// connecting to db
/*const Pokemondata = require('./pokemon.json')*/

const Pokemon = mongoose.model("Pokemon", 
{
    number: { type: Number, unique:true },
    name : { type: String, unique:true },
    types : [String],
    imgUrl: String
})
module.exports = Pokemon;

var request = require('request');

var insertAllPokemon = function() {
	request('../data/pokemon.json', function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body);
});
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();

/*exports.reset = function( req, res ) {

	const Pokemon = mongoose.model("Pokemon", 
{
    number: { type: Number, unique:true },
    name : { type: String, unique:true },
    types : [String],
    imgUrl: String
})


	// clear all existing documents from the collections
	Pokemon.find().remove();


	// populate the foods collection from json data
	// nothing fancy here as Food documents do not reference anything else
	for( var i = 0; i < PokemonData.length; i++ ) {
		new Pokemon( PokemonData[ i ] ).save();
	}
		}*/
	


