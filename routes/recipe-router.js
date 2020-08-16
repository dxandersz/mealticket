const express = require('express');
const recipeRouter = express.Router();

const recipeController = require('../controllers/recipes-controller.js') 

recipeRouter.get('/', recipeController.index);

recipeRouter.get('/add', (req, res) => {
    res.render('mealticket/')
})