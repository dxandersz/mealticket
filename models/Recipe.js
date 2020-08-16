const db = require('../db/config');

class Recipe {
    constructor(recipe) {
        this.id = recipe.id || null;
        this.name = recipe.name;
        this.instructions = recipe.instructions;
        this.thumbnail = recipe.thumbnail;
    }

    static getAll() {
        return db
        .manyOrNone('SELECT * FROM recipes ORDER BY id ASC')
        .then((recipes) => {
            return recipes.map((recipe) => {
                return new this(recipe);
            });
        });
    }
}