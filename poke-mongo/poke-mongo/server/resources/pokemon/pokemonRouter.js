const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();  // to manage routes

const pokemonController = require('./pokemonController.js');
const Pokemon = require('./pokemon.js');


router.get('/', pokemonController.get_pokemon);
router.post('/pokemon', pokemonController.post_pokemon);
router.delete('/', pokemonController.delete_pokemon);
router.get('/:number', pokemonController.get_number_pokemon);
router.put('/:number', pokemonController.update_number_pokemon);
router.delete('/:number', pokemonController.delete_number_pokemon);





module.exports = router;