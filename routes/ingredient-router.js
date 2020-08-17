const express = require('express');
const ingredientRouter = express.Router();

const ingredientController = require('../controllers/ingredient-controller.js');

ingredientRouter.get('/', ingredientController.index);

ingredientRouter.get('/index', (req, res) => {
    res.render('mealticket/index');
});

module.exports = ingredientRouter;