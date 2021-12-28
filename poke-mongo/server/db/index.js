const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/Pokemon',
() =>{console.log("successfully connected to the DB")})

module.exports = mongoose;
