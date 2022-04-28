const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    img:{
        type:String
    },
    description:{
        type:String
    },
    category: {
        type: String,
        required: true
    },
    createdAt: {
        // I want to default to a new date
        type: Date,
        immutable: true,  // This will ensure the createdAt column is never updated but once in the start
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("Product", productSchema);