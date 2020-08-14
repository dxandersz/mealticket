CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    strMeal VARCHAR(255) NOT NULL,
    strArea VARCHAR(255),
    strInstructions TEXT,
    strMealThumb VARCHAR
)

CREATE TABLE IF NOT EXISTS ingredients (
    id SERIAL PRIMARY KEY,
    Ingredient1 VARCHAR(255),
    Ingredient2 VARCHAR(255),
    Ingredient3 VARCHAR(255),
    Ingredient4 VARCHAR(255),
    Ingredient5 VARCHAR(255),
    Ingredient6 VARCHAR(255),
    Ingredient7 VARCHAR(255),
    Ingredient8 VARCHAR(255),
    Ingredient9 VARCHAR(255),
    Ingredient10 VARCHAR(255),
    Ingredient11 VARCHAR(255),
    Ingredient12 VARCHAR(255),
    Ingredient13 VARCHAR(255),
    Ingredient14 VARCHAR(255),
    Ingredient15 VARCHAR(255),
    Ingredient16 VARCHAR(255),
    Ingredient17 VARCHAR(255),
    Ingredient18 VARCHAR(255),
    Ingredient19 VARCHAR(255),
    Ingredient20 VARCHAR(255)
)