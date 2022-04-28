const objectConvertor = require("../utils/objectConcverter");
const User = require("../models/user.model");

// Get user information
exports.profile = async (req, res) =>  {
    const user = await User.findOne({
        username: req.query.username
    })
    if (user) {
        res.status(200).send(objectConvertor.userResponse(user));
    } else {
        res.status(401).send({
            message: `User is not present`
        })
    }


}

