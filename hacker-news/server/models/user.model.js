const mongoose = require("mongoose");

module.exports = mongoose.model("User",
  User = mongoose.Schema(
  {
    id : String,
    Username : String,
    Email : String,
    Password : String,
  })
 );