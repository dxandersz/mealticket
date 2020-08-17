// Variables set for dependencies.
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Need to set variables for all of the routers.
const recipeRouter = require('./routes/recipe-router');

const app = express();
//Shoudn't need this, but better safe than sorry, right?
require('dotenv').config();

// Setting use cases for dependencies.
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//Express Session is installed just to be safe, but we shouldn't need authentication.

// Establishes the views and sets ejs as the standard.
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Establishes the port the app uses.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);    
});

// Tells the server to start by rendering the index.
app.get('/', (req, res) => {
    res.render('index', {
        appName: 'mealticket',
    });
});

// Establishes the router for out Mealticket views. Will need to link these up for each router.
app.use('/mealticket', recipeRouter);

// Handling for error messages.
app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
    });
});

app.use((err, req, res, next) => {
    res.status(500).send({ err, message: err.message });
});