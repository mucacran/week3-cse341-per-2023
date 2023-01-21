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