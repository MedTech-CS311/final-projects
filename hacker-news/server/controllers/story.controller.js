const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Story = mongoose.model('Story');
var request = require('request');

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
   
  Story.find().sort({score:'desc'}).limit(10).then(
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

var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
var StoryUrl = 'https://hacker-news.firebaseio.com/v0/item/'

var isJSONResponse = function(headers) {
  return headers['content-type'].includes('json');
};

var getJSONFromHackerNews = function (url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};



exports.fill = (req,res) => { try{
  getJSONFromHackerNews(topStoriesURL, function(err, data) {
    data.forEach(id => {
      getJSONFromHackerNews(StoryUrl+id+'.json', function(err, data)
      {
        Story.create(data);
      })
    });
  
    console.log(err, 'err, expect to be null');
    console.log(data, 'data, expect to be ids for top 500 stories');
    // mongoose.disconnect();
  
  });
}catch(err){
  console.error(err);
}
}