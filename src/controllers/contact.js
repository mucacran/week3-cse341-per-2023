const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
    .getDb()
    .db('Test')
    .collection('Contact')
    .find();
    result.toArray().then((lists) => {
      console.log(lists); // Imprime los datos en la consola
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('Test')
    .collection('Contact')
    .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
  });
};

const enviardatos = async (req, res)=>{
  console.log(`Se acaba de ingresar ${req.body}`);
  const result = await mongodb
    .getDb()
    .db('Test')
    .collection('Contact')
    .find({ _id: userId });
    
  collection.insert(req.body, (error, result) => {
    if(error) {
        return res.status(500).send(error);
    }
    res.send(result.result);
  });
}

module.exports = {
  getAll,
  getSingle,
  enviardatos
};