const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = mongoose.model('User');


function clean(obj) {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName]==='') {
      delete obj[propName];
    }
  }
  return obj
}

// Create and Save a new user
exports.create = (req, res) => {
  
  // Validate request
  if (!req.body.UserName
    || !req.body.Email || !req.body.Password) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
    return;
  }

  // Create a user
  const user = {
    UserName: req.body.UserName,
    Email: req.body.Email,
    Password: req.body.Password
  };

  // Save user in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const UserName = req.query.UserName;
    var condition = UserName ? { UserName: { [Op.like]: `%${UserName}%` } } : null;
      
    User.find({ where: condition })
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

// Find a single user with an id
exports.findOne = async (req, res) => {
  
    
  // const user = await User.findOne({token}).exec();

    const id = req.params.id;

    User.findById(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find user with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
};

// Update a user by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = {username,email,password} =(req.body);
    let done = 0;

    //Encrypt user password
    if(body.password)
    body.password = await bcrypt.hash(body.password, 10);
    if(body.email)
        body.email= body.email.toLowerCase(); // sanitize: convert email to lowercase

  
    const user ={
      Username : body.username,
      Email: body.email,
      Password: body.password
    };

    updates = clean(user); //cleaning empty attributes

    User.findByIdAndUpdate(id,updates,null,function(err,res){
      if (err){
        console.log(err)
         res.send(err);
        
    }
    else{
        console.log("User Updated Successfully");
    }
    })
    return res.status(200).send({
      message : "User Updated Successfully !"
    });

   } catch (err) {
      console.log(err);
    }
  };

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Couldn't Delete User with id=${id}!`
        });
      } else {
        res.send({
          message: `User with id=${id} Deleted !`
        });
      }
    })
};

// Delete all users from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Clients were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Clients."
      });
    });
};

// Find all published users
exports.findAllPublished = (req, res) => {
  
};