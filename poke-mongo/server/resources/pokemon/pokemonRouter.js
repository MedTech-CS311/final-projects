const express = require("express");
const Pokemon = require("./Pokemon");

var router = express.Router();

router.post("/", (req,res) =>{
    const newPokemon = new Pokemon(req.body);
    newPokemon
    .save()
    .then((pokemon) => {
        res.status(201).send(pokemon);
    })
    .catch((error)=>{
        res.status(500).send(error);
    });
});

router.get("/",(req,res)=>{
    Pokemon.find({})
    .then((pokemons)=>{
        res.status(200).send(pokemons);
    })
    .catch((error)=>{
        res.status(500).send(error);
    });
});

router.delete("/",(req,res)=>{
    Pokemon.find({}).deleteMany()
    .then((pokemons)=>{
        res.status(200).send(pokemons);
    })
    .catch((error)=>{
        res.status(500).send(error);
    });
});
router.
module.exports  = router;