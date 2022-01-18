module.exports = app => {
    const users = require("../controllers/userCRUD.controller.js");
    const userAuth = require("../controllers/userAuth.controller");
    var router = require("express").Router();
  
    // Create a new user
    router.post("/register", userAuth.register);

    // Login a user
    router.post("/login", userAuth.login);
  
    // Retrieve all user
    router.get("/getAll", users.findAll);
  
    // Retrieve all with condition (not set)
    router.get("/c", users.findAllPublished);
  
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
  
    // Update a user with id
    router.put("/:id", users.update);
  
    // Delete a user with id
    router.delete("/:id", users.delete);
  
    // Delete all user (not set)
    router.delete("/", users.deleteAll);
  
    app.use('/api/user', router);
  };