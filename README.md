# MealTicket
[Test it on HEROKU](https://salty-caverns-38087.herokuapp.com/)

An ingredient tracking app that draws recipes from TheMealDB and lets users save the ingredients from each recipe to a shopping list. Users can design multiple (public) shopping lists known as MealTickets and remove ingredients from them from the MealTicket view.

## Documentation
### Wireframes
    ![Wireframe One](/assets/images/wireframe-1.jpg)
    ![Wireframe One](/assets/images/wireframe-1.jpg)
    ![Wireframe One](/assets/images/wireframe-1.jpg)
    ![Wireframe One](/assets/images/wireframe-1.jpg)
    ![Wireframe One](/assets/images/wireframe-1.jpg)
    ![Wireframe One](/assets/images/wireframe-1.jpg)


## Specs
Designed for lightweight deployment, most of the technology that MealTicket uses can be drawn from NPM modules.

### External API
* The recipes themselves and included ingredients are pulled from TheMealDB ([documentation here](https://www.themealdb.com/api.php)
)

### Core Technology
* CSS
* HTML 5
* Javascript
* Node.js
* Ejs
* Express
* PostgresSQL and Heroku-postgres

### Modules/Dependencies
* body-parser
* cookie-parser
* dotenv
* ejs
* express
* method-override
* morgan
* node-fetch
* pg-promise

## Future Additions
The app as it stands is not working close to the way it should. The routes need to be fixed to stop spitting back error messages, and a fetch request needs to be put in place that draws from the source API.

## Guide For Local Deployment
While the app will work just fine on Heroku, you can also set it up as a local instance of the application with just a few steps.

1. Click the green "Code" button at the top of this repo, and copy the link in your browser. You can also simply use https://github.com/dxandersz/mealticket.git
2. Type 'git clone https://github.com/dxandersz/mealticket.git' into your browser. Make sure that it's not an existing repository with Git already initialized.
3. Import the database and seeds. You can do this by running psql in the main directory for this app and entering '\i db/migrations/create-mealticket.sql seeds.sql'.
4. Return to the root directory, and type "npm install" to install all of the necessary modules and dependencies.
5. Launch the server by typing "npm run dev".
6. Accesss the app by entering localhost:3000 into your web browser!