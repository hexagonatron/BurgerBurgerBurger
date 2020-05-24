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
    "username": process.env.MYSQL_USER_NAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": "burgerdb",
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.MYSQL_USER_NAME,
    "password": process.env.MYSQL_PASSWORD,
    "database": "burgerdb",
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT,
    "dialect": "mysql",
    "operatorsAliases": false
  }
}