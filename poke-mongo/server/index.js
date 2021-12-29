
const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const pokemonRouter = require("./resources/pokemon/pokemonRouter")

const db = require("./db")
const mongoose = require("mongoose");
const Pokemon = require("./resources/pokemon/Pokemon");
const res = require("express/lib/response");

app.use('/pokemon', pokemonRouter)
//app.use('/api/pokemon/:number',pokemonRouter)
app.use(bodyParser())






app.listen(8000, () => {
    console.log("started listening for resquests on port 8000");
})
