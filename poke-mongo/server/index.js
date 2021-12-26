/**
 * Your server comes here
 */
const express = require("express");
const bodyParser = require("body-parser");
const Pokemon = require("./resources/pokemon/Pokemon.js");
const pokemonRouter = require("./resources/pokemon/pokemonRouter");
const db = require("./db");
const app = express();
const PORT = 3000;

app.use(bodyParser());
app.use("/api/pokemon", pokemonRouter);
app.listen(PORT, () => {
  console.log(`Started listening to requests on port ${PORT}`);
});
