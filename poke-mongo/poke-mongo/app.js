const mongoose = require("mongoose");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser"); // to extract request bodies

mongoose
  .connect("mongodb://127.0.0.1:27017/pokemongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

const pokemonRoutes = require("./server/resources/pokemon/pokemonRouter.js");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false })); // True allows you to parse extend bodies containing rich data
app.use(bodyParser.json()); // Extract json data and makes it easily readable to us.
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status.json({});
//   }
//   next();
// });

// Routes which should handle requests
app.use("/pokemons", pokemonRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
