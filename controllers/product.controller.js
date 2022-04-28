const Product = require("../models/product.model");
const objectConvertor = require("../utils/objectConcverter");

exports.addProduct = async (req, res) =>  {
    const newProduct = new Product({
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        category: req.body.category
      });
      try{
        const product = await Product.create(newProduct);
        if(product){
          res.status(201).send(product);
        }
      }
      catch(err){
        res.status(500).send({"message":"Failed to add product"}); 
      }
}


exports.getProducts = async (req, res) =>  {
    const products = await Product.find();
    if (products) {
        return res.status(200).send(objectConvertor.productResponse(products));
    }
}
