const express = require("express");
const Pokemon = require("./Pokemon");
const fs = require("fs");
var controller = require("./pokemonController");

var router = express.Router();

router.post("/", controller.InsertPokemons);

router.get("/", controller.FindAllPokemons);

router.delete("/", controller.DeleteAllPokemons);

router.get("/:number/", controller.FindByNumber);

router.delete("/:number/", controller.DeleteByNumber);

router.put("/:number/", controller.UpdateByNumber);

module.exports = router;
