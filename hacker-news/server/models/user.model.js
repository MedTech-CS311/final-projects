const mongoose = require("mongoose");

module.exports = mongoose.model("User",
  User = mongoose.Schema(
  {
    id : Number,
    UserName : String,
    Email : String,
    Password : String,
  })
 );