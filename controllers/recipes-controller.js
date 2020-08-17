const Recipe = require('../models/Recipe');

const recipeController = {};

recipeController.index = (req, res, next) => {
    Recipe.getAll()
        .then((recipes) => {
            res.render('mealticket/index', {
                message: 'ok',
                data: { recipes },
            });
        })
        .catch(next);
};

module.exports = recipeController;