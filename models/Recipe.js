const db = require('../db/config');

class Recipe {
    constructor(recipe) {
        this.id = recipe.id || null;
        this.name = recipe.name;
        this.instructions = recipe.instructions;
        this.thumbnail = recipe.thumbnail;
    }

    static recipeList() {
        return db.manyOrNone('SELECT * FROM recipes');
            
    }
}

module.exports = Recipe;