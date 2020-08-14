require('dotenv').config();
const DB_NAME = process.env.DB_NAME || "mealticket";

const options = {
    query: (e) => {
        console.log(e.query);
    },
};

const pgp = require('pg-promise')(options);

function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp({
            database: DB_NAME,
            port: 5432,
            host: 'localhost',
            user: 'postgres',
            password:  'my_postgres_password'
        });
    }
}

module.exports = setDatabase()