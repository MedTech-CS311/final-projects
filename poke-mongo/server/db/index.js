/**
 * Your Database Connection comes here
 */

 const fs = require("fs");
 const pokemons = JSON.parse(
  fs.readFileSync(
    "/Users/ASUS/Desktop/final-projects/poke-mongo/data/pokemon.json"
  ),
  "utf-8"
);

const getCount = async () => {
   const count = await mongoose.connection.db.collection('pokemons').countDocuments()
   .then(res => {return res});
   if (count === 0)
   {
     Pokemon.insertMany(pokemons);
     console.log("Database was empty. Added initial db of pokemons");
   }
   else
   {
     console.log("Database already has " + count + " pokemons");
   }
}

//Import
 const mongoose = require('mongoose');
 const Pokemon = require('../resources/pokemon/Pokemon');

 //Connect to database

 mongoose.connect('mongodb://localhost:27017/pokemon-management',()=>
 {
    console.log("Connected to database");
    getCount();
 });

//Export 
 module.exports = mongoose