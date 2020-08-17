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

recipeController.show = (req, res, next) => {
    Recipe.getById(req.params.id)
    .then((recipe) => {
        res.locals.recipe = recipe;
        next();
    })
    .catch(next);
};

module.exports = recipeController;