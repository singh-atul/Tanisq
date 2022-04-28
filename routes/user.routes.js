const userController = require('../controllers/user.controller');
const  authJwt  = require("../middlewares/authJwt");

module.exports = function (app) {
    app.get("/tanishq/api/v1/profile", [authJwt.verifyToken], userController.profile);
}

