<<<<<<< HEAD
//const routes = require('express').Router();
//const jokes = require('../controllers');

const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.send('Sergio Bravo');
});
/*
router.get('/jokes',jokes.displayJoke);*/

//router.use('/contacts', require('./contacts'));
router.use('/contacts', require('./contacts'))

module.exports = router;
=======
const routes = require('express').Router();
const jokes = require('../controllers');
//const contacts = require('contacts');


routes.get('/', (req, res) => {
  res.send('Sergio Bravo');
});

routes.get('/jokes',jokes.displayJoke);

//routes.get('/contacts', contacts.visualizaMensaje);

module.exports = routes;
>>>>>>> 5ead2715c92e659dc9c23e59e09ceb7cdbef0873
