const authController = require('../controllers/auth.controller');
const  verifyUserReqBody  = require("../middlewares/verifyUserReqBody");

module.exports = function (app) {
    app.post("/tanishq/api/v1/register/",[verifyUserReqBody.validateUserRequestBody], authController.signup);
    app.post("/tanishq/api/v1/authenticate", authController.signin);

}

