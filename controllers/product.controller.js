const Product = require("../models/product.model");

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
