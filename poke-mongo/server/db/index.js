const mongoose = require("mongoose")
, pokemon = require( './data/pokemon.json' )
mongoose.connect('mongodb://localhost:27017/Pokemon',
() =>{console.log("successfully connected to the DB")})

module.exports = mongoose;
