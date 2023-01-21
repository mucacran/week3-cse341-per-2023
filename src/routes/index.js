const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

router.use('/contacts', require('./contacts'))

module.exports = router;