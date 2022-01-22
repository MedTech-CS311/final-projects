const mongoose = require ('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');  // to extract request bodies

mongoose.connect('mongodb+srv://rayan:azerty123@bbkar-project.smvmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const pokemonRoutes = require('/Users/macbookpro/Documents/GitHub/final-projects/poke-mongo/server/resources/pokemon/pokemonRouter.js');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));  // True allows you to parse extend bodies containing rich data
app.use(bodyParser.json());  // Extract json data and makes it easily readable to us.

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status.json({});
    }
    next();
});

// Routes which should handle requests
app.use('/pokemons', pokemonRoutes);    

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;