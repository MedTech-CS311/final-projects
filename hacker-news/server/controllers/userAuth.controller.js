
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.login = async (req, res) => {
    try {
        // Get user input
        const { Email, Password } = req.body;
    
        // Validate user input
        if (!(Email && Password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
       const user = await User.findOne({Email : Email.toLowerCase()}).exec();
    
        if (user && (await bcrypt.compare(Password, user.Password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user.id, Email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
          
      // user
      res.status(200).json(user)
      console.log("You're in "+ user.UserName );
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
    const { UserName, Email, Password } = req.body;

    // Validate user input
    if (!(Email && Password && UserName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exists in our database
    const oldUser = await User.findOne({ Email : Email }).exec();

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(Password, 10);

    // Create user in our database
    const user = await User.create({
        UserName,
        Email: Email.toLowerCase(), // sanitize: convert email to lowercase
        Password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, Email },
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