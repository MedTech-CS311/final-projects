const mongoose = require("mongoose");

//Model definition
const Pokemon = mongoose.model('Pokemon', { 
    number:{type: Number, unique:true},
    name: {type:String, unique:true},
    types: Array,
    imageUrl:String
});

module.exports = Pokemon;