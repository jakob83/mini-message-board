const { Router } = require('express');
const indexRouter = Router();
const db = require('../db/queries');

// Configure route on "/"
indexRouter.get('/', async (req, res) => {
  // render an ejs file from views
  const messages = await db.getAllMsg();
  res.render('index', {
    title: 'Welcome to ZaggApp',
    messages: messages,
  });
});

indexRouter.get('/new', (req, res) => {
  res.render('new/new');
});
indexRouter.post('/new', (req, res, next) => {
  const { userName, text } = req.body;
  if (userName === '' || text === '') next(new Error('no empty fields'));
  db.insertMsg({ text: text, user: userName, date: new Date() });
  res.redirect('/');
});
indexRouter.use((error, req, res, next) => {
  res.send(error.message);
});

module.exports = indexRouter;
