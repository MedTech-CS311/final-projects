/**
 * Your server comes here
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("../server/db/index");
const taskRouter = require("./routes/tasks");
//import express from 'express';
//import bodyParser from 'body-parser'
//import cors from 'cors';
//import connection from '../server/db/index.js'


const app = express();
connection();

app.use(bodyParser.json({limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended: true}));
app.use(express.json());

app.use(cors());


const PORT = process.env.PORT || 8000;


/*connection
    .then(()=> app.listen(PORT, ()=> console.log(`server is running on port:${PORT}`)))
    .catch((error)=> console.log(error.message));
*/
app.use('/tasks',taskRouter);
app.listen(PORT,()=> console.log(`server is running on port :${PORT}`));



