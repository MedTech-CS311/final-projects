const mongoose = require("mongoose");
const { db } = require("../resources/pokemon/Pokemon");
mongoose.connect('mongodb://localhost:27017/Pokemon',
() =>{console.log("successfully connected to the DB")})

module.exports = db;
