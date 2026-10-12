const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title : {type : String, required : true, unique : true},
    ingredients : {type : [String]},
    instructions : {type : String},
    time : {type : String},
    image : {type : String}
}, {timestamps : true});

module.exports = mongoose.model("Recipe", recipeSchema);