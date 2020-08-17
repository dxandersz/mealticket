const express = require('express');
const recipeRouter = express.Router();

const recipeController = require('../controllers/recipes-controller.js');

recipeRouter.get('/', recipeController.index);

recipeRouter.get('/index', (req, res) => {
    res.render('mealticket/index');
});

module.exports = recipeRouter;