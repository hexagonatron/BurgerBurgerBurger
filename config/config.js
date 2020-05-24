require("dotenv").config();
module.exports = {
  "development": {
    "username": process.env.MYSQL_USER_NAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": "burgerdb",
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}