const Pokemon = require("./Pokemon");



exports.pokemon_get_all = (req,res) => {
    Pokemon.find({})
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
}
   

exports.pokemon_get_one = (req,res) => {
    Pokemon.findOne({ 'number':req.params.number })
    .then((pokemons) => {
        res.status(200).json(pokemons)
    })
  };

exports.pokemon_post =  (req,res) => {
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
};

exports.pokemon_put = (req,res) => {

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
}

exports.pokemon_delete_one = (req,res) => {
    Pokemon.where().findOneAndRemove({number:req.params.number},function (err, pokemon) {
        if (err) return handleError(err);
        console.log( pokemon);
      });
    
    res.send()
};

exports.pokemon_delete = (req,res) => {
    Pokemon.deleteMany({},function (err, pokemon) {
        if (err) return handleError(err);
        
      });
    
    res.send()
};

