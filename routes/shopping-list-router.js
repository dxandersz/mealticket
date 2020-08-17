const express = require('express');
const shoppingListRouter = express.Router();

const shoppingListController = require('../controllers/shopping-list-controller.js')

shoppingListRouter.get('/', shoppingListController.index);

shoppingListRouter.get('shopping_lists/index', (req, res) => {
    res.render('')
})