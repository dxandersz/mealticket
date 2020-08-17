const Recipe = require('../models/Recipe');

const recipeController = {
    async index(req, res, next) {
        const recipes = await recipes.getAll();
        res.render('mealticket/index', {
            header: 'Check out the recipes!',
            recipes,
        });
    }
};



module.exports = recipeController;