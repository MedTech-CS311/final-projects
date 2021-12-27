const Pokemon = require("./Pokemon");
const fs = require("fs");
const pokemons = JSON.parse(
  fs.readFileSync(
    "/Users/ASUS/Desktop/final-projects/poke-mongo/data/pokemon.json"
  ),
  "utf-8"
);

var InsertPokemons = (req, res) => {
  //Insert one pokemon
  //{
  //const newPokemon = new Pokemon(req.body);
  //newPokemon
  //.save()
  //}
  //Insert Many Pokemons
  Pokemon.insertMany(pokemons)
    .then((pokemons) => {
      console.log(pokemons);
      res.status(201).send(pokemons);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
var FindAllPokemons = (req, res) => {
  Pokemon.find({})
    .then((pokemons) => {
      res.status(200).send(pokemons);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var DeleteAllPokemons = (req, res) => {
  Pokemon.find({})
    .deleteMany()
    .then((pokemons) => {
      console.log(pokemons);
      res.status(200).send(pokemons);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var FindByNumber = (req, res) => {
  Pokemon.find(req.params)
    .then((pokemon) => {
      res.status(200).send(pokemon);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var DeleteByNumber = (req, res) => {
  Pokemon.findOneAndDelete(req.params, { new: true })
    .then((pokemon) => {
      console.log(pokemon);
      res.status(200).send(pokemon);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

var UpdateByNumber = (req, res) => {
  Pokemon.findOneAndUpdate(req.params, req.body, { new: true })
    .then((pokemon) => {
      res.status(200).send(pokemon);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.InsertPokemons = InsertPokemons;
exports.FindAllPokemons = FindAllPokemons;
exports.DeleteAllPokemons = DeleteAllPokemons;
exports.FindByNumber = FindByNumber;
exports.DeleteByNumber = DeleteByNumber;
exports.UpdateByNumber = UpdateByNumber;
