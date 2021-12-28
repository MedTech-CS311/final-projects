const mongoose= require("mongoose")
pokemondata = require( 'C:\Users\Acer\OneDrive\Bureau\project\final-projects\poke-mongo\data\pokemon.json' );
// connecting to db

/*const Pokemon = mongoose.model("Pokemon", 
{
    number: { type: Number, unique:true },
    name : { type: String, unique:true },
    types : [String],
    imgUrl: String
})
module.exports = Pokemon;*/

/*	const Pokemon = mongoose.model("Pokemon", 
{
    number: { type: Number, unique:true },
    name : { type: String, unique:true },
    types : [String],
    imgUrl: String
})
module.exports = Pokemon;

	// clear all existing documents from the collections
	Pokemon.find().remove();

	// populate the foods collection from json data
	// nothing fancy here as Food documents do not reference anything else
	for( var i = 0; i < foodData.length; i++ ) {
		new Pokemon( pokemondata[ i ] ).save();
	}*/

    exports.reset = function( req, res ) {

        // get refs to the models we defined above
        var Pokemon = mongoose.model( 'Pokemon' );
        // clear all existing documents from the collections
	Pokemon.find().remove();

	// populate the foods collection from json data
	// nothing fancy here as Food documents do not reference anything else
	for( var i = 0; i < foodData.length; i++ ) {
		new Pokemon( pokemondata[ i ] ).save();
	}
}


