const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  number: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  types: [Array],
  imgUrl: String,
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
