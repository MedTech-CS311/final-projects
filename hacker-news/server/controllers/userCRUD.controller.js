
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = mongoose.model('User');

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
exports.findOne = (req, res) => {
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
exports.update = (req, res) => {
    const id = req.params.id;
  
    User.updateOne(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.deleteOne({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
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