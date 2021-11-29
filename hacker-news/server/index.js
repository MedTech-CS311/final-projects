const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./middleware/auth");
require("dotenv").config();
require("./db")
const {API_PORT} = process.env;

const app= express();
const bodyParser = require("body-parser");
var corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// simple route
app.get("/",auth, (req, res) => {
  res.json({ message: "Welcome to HackedNews." });
});
require("./routes/userCRUD.routes")(app);
require("./routes/Story.routes")(app);
// set port, listen for requests

const PORT = process.env.PORT || API_PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

