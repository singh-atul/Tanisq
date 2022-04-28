const User = require("../models/user.model");
var bcrypt = require("bcryptjs");
const config = require("../configs/auth.config");
var jwt = require("jsonwebtoken");

/**
 * Register user
 */
exports.signup = async (req, res) =>  {
    console.log("Inside",req)
    const userObj = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    }

    try {
        const userCreated = await User.create(userObj);
        res.status(201).send("User created Successfully");
    } catch (err) {
        console.err("Some error while saving the user in db", err.message);
        res.status(500).send({
            message: "Some internal error while inserting the element"
        })
    }
}



// Authenticate
exports.signin = async (req, res) =>  {
    //Fetch the user based on the userName
    //Validating the userName 
    const user = await User.findOne({ username:  req.body.username });
    if (user == null) {
        res.status(400).send({
            message: "Failed! UserName doesn't exist!"
        });
        return;
    }

    //Checkig if the password matches
    var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
    
    if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
    }
    var token = jwt.sign({ id: user.username }, config.secret, {
        expiresIn: 120 // 2 minutes
      });
    
      res.status(200).send({
        name : user.name,
        email: user.email,
        username : user.username,
        accessToken : token
      })

  }