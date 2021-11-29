const mongoose = require("mongoose");

module.exports = mongoose.model("Story",
  Story = mongoose.Schema(
  {
    id : Number,
    by : Object,
    title : String,
    score : String,
  })
 );
    