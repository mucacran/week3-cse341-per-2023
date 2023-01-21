const routes = require('express').Router();
const jokes = require('../controllers');
//const contacts = require('contacts');


routes.get('/', (req, res) => {
  res.send('Sergio Bravo');
});

routes.get('/jokes',jokes.displayJoke);

//routes.get('/contacts', contacts.visualizaMensaje);

module.exports = routes;