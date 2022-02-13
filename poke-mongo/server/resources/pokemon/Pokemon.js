var mongoose= require("mongoose")
// connecting to db
/*const Pokemondata = require('./pokemon.json')*/

var Pokemon = mongoose.model("Pokemon", 
{
    number: { type: Number, unique:true },
    name : { type: String, unique:true },
    types : [String],
    imgUrl: String
})
module.exports = Pokemon;



