    const express = require('express');
    const router = express.Router();
    const {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe} = require('../controller/recipe');

    router.get('/', getRecipes);
    router.post('/', addRecipe);
    router.get('/:id', getRecipe)
    router.patch('/:id', editRecipe)
    router.delete('/:id', deleteRecipe);

module.exports = router;
