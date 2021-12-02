/**
 * Your Database Connection comes here
 */

//Import
 const mongoose = require('mongoose');

 //Connect to database

 mongoose.connect('mongodb://localhost:27017/pokemon-management',()=>
 {
    console.log("Connected to database");
 });
//Export 
 module.exports = mongoose