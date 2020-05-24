const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

const db = require("./models/index");
const routes = require("./controllers/routes");


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(routes);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });