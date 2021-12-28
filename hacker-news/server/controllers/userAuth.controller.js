
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.login = async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
       const user = await User.findOne({Email : email.toLowerCase()}).exec();
    
        if (user && (await bcrypt.compare(password, user.Password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user.id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: '1800s',
            }
          );
    
          // save user token
          user.token = token;
          
      // user
      res.json({user,token});
      console.log("You're in "+ user.Username );
    }else
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};
    

exports.register = async (req, res) => {
    // Our register logic starts here
  try {
    // Get user input
    const { username, email, password } = req.body;

    // Validate user input
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exists in our database
    const oldUser = await User.findOne({ Email : email }).exec();

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
        Username :username,
        Email: email.toLowerCase(), // sanitize: convert email to lowercase
        Password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;

      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  };