const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const { static } = require('express');
const app = express();
const port = 3000;

const route = require('./routes');

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
app.set('views', path.join(__dirname, 'resource/views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
