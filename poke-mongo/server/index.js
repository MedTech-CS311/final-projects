const express = require("express");
const app = express();
const bodyParser= require("body-parser");


const db = require("./db")
const mongoose = require("mongoose");
const Pokemon = require("./resources/pokemon/Pokemon")
app.use(bodyParser())

app.get("/api/pokemon",(req,res) => {
    Pokemon.find({})
    .then((pokemons)=> {
        res.status(200).json(pokemons)
    })
   
})

app.post("/api/pokemon", (req,res) => {
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

app.put("/api/pokemon/:id", (req,res) => {
    const userId = req.params.id
    console.log(userId)
    res.status(204).send("Updating User...")
})

app.delete("/api/pokemon/:id",(req,res) => {
    const userId=req.params.id
    res.send(`deleting user with id ${userId}...`);

})



app.listen(8000, () => {
    console.log("started listening for resquests on port 8000");
})
