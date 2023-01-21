const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');


const app = express();
<<<<<<< HEAD
const port = process.env.PORT || 8080;

=======
const port = process.env.PORT || 8082;

/*app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})*/
>>>>>>> 5ead2715c92e659dc9c23e59e09ceb7cdbef0873

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
