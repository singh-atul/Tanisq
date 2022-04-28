const User = require("../models/user.model");
var bcrypt = require("bcryptjs");

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



