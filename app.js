const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require("./controllers/routes");

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});