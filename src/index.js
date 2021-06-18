const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const { static } = require('express');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db'); 
//Connnect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
