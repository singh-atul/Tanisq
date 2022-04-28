exports.userResponse = (user) => {
    console.log("user",user)
    return {
        name:user.name,
        email:user.email,
        username:user.email,
        role:user.role
    }
}

exports.productResponse = (products) => {

    productResult = [];
    products.forEach(product => {
        productResult.push({
            name: product.name,
            img: product.img,
            category: product.category,
            id:product._id
        });
    });
    return productResult;

}
