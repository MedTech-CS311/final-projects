const mongoose = require("mongoose");

const connectiondb = () => {
  mongoose
    .connect(
      "mongodb+srv://Mahmoud:Midou2001@cluster0.h0gxs.mongodb.net/hackernewsdb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to MongoDB...");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectiondb;

//mongodb://localhost:27017/hackernewsdb
//mongodb+srv://Mahmoud:<password>@cluster0.h0gxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
