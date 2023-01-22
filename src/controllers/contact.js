const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//imprime por pantalla todo lo que esta en la base de datos
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

//imprime por pantalla un contacto segun su id que se escriba en el buscador
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

//publica dentro de la tabla
const enviardatos = async (req, res)=>{
  console.log(`Se acaba de ingresar ${req.body.firstName}`);

  const result = await mongodb
  .getDb()
  .db('Test')
  .collection('Contact')
  .insertOne(req.body);
  
  //res.send(result.result);
  //res.redirect('/contacts');

  if (result.acknowledged) {
    res.status(201).json(result);
  } else {
    res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
}

const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb
    .getDb()
    .db('Test')
    .collection('Contact')
    .replaceOne({ _id: userId }, contact);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('Test').collection('Contact').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};

module.exports = {
  getAll,
  getSingle,
  enviardatos,
  updateContact,
  deleteContact
};