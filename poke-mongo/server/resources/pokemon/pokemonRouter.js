const express=require("express");
const pokemonRouter = express.Router()
const Pokemon = require("./Pokemon");
const bodyParser= require("body-parser");
pokemonRouter.use(bodyParser())
pokemonRouter.get("/",(req,res) => {
    Pokemon.find({})
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
})

pokemonRouter.get("/:number", (req,res) => {
    Pokemon.findOne({ 'number':req.params.number })
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
  });

  pokemonRouter.post("/", (req,res) => {
    const userData = req.body;
    const newPokemon = new Pokemon(userData);
    newPokemon.save()
    .then(() => {
        console.log("Saved!")
        res.status(201).json(newPokemon);
})
    .catch((error) => {
        console.log("error");
        res.send(error)
    })
})
pokemonRouter.put("/:number", (req,res) => {

    Pokemon.findOneAndUpdate({ number:req.params.number},
        { name:req.body.name,
        types:req.body.types,
        imageUrl:req.body.imageUrl
    })
    .then(() => {
        console.log("Saved!")
        res.status(201).json(Pokemon);
})
    .catch((error) => {
        console.log("error");
        res.send(error)
})
})


pokemonRouter.delete("/:number",(req,res) => {
    Pokemon.where().findOneAndRemove({number:req.params.number},function (err, pokemon) {
        if (err) return handleError(err);
        console.log( pokemon);
      });
    
    res.send()
})

pokemonRouter.delete("/",(req,res) => {
    Pokemon.deleteMany({},function (err, pokemon) {
        if (err) return handleError(err);
        
      });
    
    res.send()
})

module.exports = pokemonRouter;