const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  karma: {
    type: Number,
    required: true,
  },
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
