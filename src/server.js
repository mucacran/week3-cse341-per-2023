const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');


const app = express();
const port = process.env.PORT || 8082;

/*app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})*/

/*En el archivo del profesor*/
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
    console.log(`Running on port ${port}`);
    
  }
});
