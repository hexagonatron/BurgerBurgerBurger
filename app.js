const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models/index");


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require("./controllers/routes");

app.use(routes);

app.use(express.urlencoded({extended: true}));

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });