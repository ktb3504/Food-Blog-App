const Recipe = require('../models/Recipe')

const getRecipes = async (req, res) => {
    try{
        const data = await Recipe.find();
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(400).json({error : "message not found"});
    }
}

const getRecipe = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Recipe.findById(id);
        if(!item) res.status(404).json({message : "item not found"});
        res.status(200).json(item);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "not found"});
    }
}

const addRecipe = async (req, res) => {
    const {title} = req.body;
    try{
        if(title){
            const newRecipe = await Recipe.create({title});
            res.status(200).json({message : "added to db"});
        }
        else{
            res.json({error : 'provide valid entries'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "internal server error"});
    }
}

const editRecipe = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Recipe.findByIdAndUpdate(id, req.body,{new : true, runValidators: true});
        if(!item) res.status(404).json({error : 'err'});
        res.status(200).json(item);
    }
    catch(err){
        console.log(err);
        res.status(404).json({error : "not found"});
    }
}

const deleteRecipe = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Recipe.findByIdAndDelete(id, {new : true});
        if(item) res.status(200).json(item);
    }
    catch(err){
        console.log(err);
        res.status(404).json({error : "not found"});
    }
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe};
