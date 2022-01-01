const express = require("express");

const mongoose = require("mongoose");

const Pokemon = require("./pokemon.js");

exports.get_pokemon = function (req, res, next) {
  Pokemon.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.post_pokemon = function (req, res, next) {
  const user = req.body;
  const newpokemon = new Pokemon(user);
  newpokemon.save();
  res.json();

  //   const pokemon = new Pokemon({
  //     // _id: new mongoose.Types.ObjectId(),
  //     number: req.body.number,
  //     name: req.body.name,
  //     types: req.body.types,
  //     imgUrl: req.body.imgUrl,
  //   });
  //   pokemon
  //     .save() //method save provided by mongoose to save in the database
  //     .then((result) => {
  //       console.log(result);
  //       res.status(201).json({
  //         message: "Handling POST requests to /pokemon",
  //         createdPokemon: result,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json({
  //         error: err,
  //       });
  //     });
};

exports.delete_pokemon = function (req, res, next) {
  Pokemon.remove()
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Deleting All Pokemons",
        deletedPokemons: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.get_number_pokemon = function (req, res, next) {
  const Number = req.params.number;
  Pokemon.find({ number: Number })
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No valid entry for provided number" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.update_number_pokemon = function (req, res, next) {
  const Number = req.params.number;
  Pokemon.update({ number: Number }, { $set: { name: req.body.newName } })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.delete_number_pokemon = function (req, res, next) {
  const Number = req.params.number;
  m = Pokemon.find({ number: Number });
  console.log(m);
  Pokemon.deleteOne(m)
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: JSON.stringify(result) + "Deleted Pokemon",
        deletedPokemon: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
