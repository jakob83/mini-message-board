const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/index');
const app = express();

// setup, so that node/express knows, where the views folder is
app.set('views', path.join(__dirname, 'views'));
// and that the views folder holds .ejs files
app.set('view engine', 'ejs');

// setup, so that node/express knows, where the assets folder is (in this case /public)
// in the public folder static files like css and html are stored
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log('live on' + PORT);
});
