const productController = require('../controllers/product.controller');
const  authJwt  = require("../middlewares/authJwt");

module.exports = function (app) {
    
    //Add a specific product
    app.post('/tanishq/api/v1/addproduct',[authJwt.verifyToken], productController.addProduct)
    //Get all products details
    app.get('/tanishq/api/v1/product', productController.getProducts)
    //Update a product
    app.put('/tanishq/api/v1/editproduct/:productId',[authJwt.verifyToken], productController.updateProduct)

}



