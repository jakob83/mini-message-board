const { Router } = require('express');
const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];
// Configure route on "/"
indexRouter.get('/', (req, res) => {
  // render an ejs file from views
  res.render('index', { title: 'Welcome to ZaggApp', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('new/new');
});
indexRouter.post('/new', (req, res, next) => {
  const { userName, text } = req.body;
  if (userName === '' || text === '') next(new Error('no empty fields'));
  messages.push({
    text: text,
    user: userName,
    added: new Date(),
  });
  res.redirect('/');
});
indexRouter.use((error, req, res, next) => {
  res.send('Error, please fill out every field');
});

module.exports = indexRouter;
