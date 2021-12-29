/**
 * Connect to the Database with Mongoose here
 */


const mongoose = require("mongoose");
//import mongoose from 'mongoose';

module.exports = ()=>{

    try{
        const CONNECTION_URL = 'mongodb+srv://taskManagement:taskManagement123@cluster0.zsxkl.mongodb.net/TaskManagement?retryWrites=true&w=majority'
        mongoose.connect(CONNECTION_URL, {useNewUrlParser :true, useUnifiedTopology: true});

        const con = mongoose.connection;

        con.on("open", ()=> {console.log("Connected...")});

    }catch(err){
        console.log("Could not connect to the database");

    } 
}







