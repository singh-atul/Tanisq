const productController = require('../controllers/product.controller');
const  authJwt  = require("../middlewares/authJwt");

module.exports = function (app) {
    //Add a specific product
    app.post('/tanishq/api/v1/addproduct',[authJwt.verifyToken], productController.addProduct)

}



