const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Story = mongoose.model('Story');

exports.create = (req, res) => {
  
  // Validate request
  if (!req.body.title
    || !req.body.by || !req.body.score) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a story
  const story = {
    id : req.body.id,
    title: req.body.title,
    by: req.body.by,
    score: req.body.score
  };

  // Save Story in the database
  Story.create(story)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Story."
      });
    });
};

exports.getStories = (req,res) => {
   
  Story.find().sort({score:'desc'}).then(
    data=>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while getting Stories."
      })
    }
  )
}

// Retrieve all users from the database.
exports.findTopTen = (req, res) => {
  const UserName = req.query.UserName;
  var condition = UserName ? { UserName: { [Op.like]: `%${UserName}%` } } : null;
    
  Story.find().sort({'by.karma':'desc'}).limit(10)
      .then(data => {
          res.send(data);
        })
      .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving Data."
          });
      });
  
};