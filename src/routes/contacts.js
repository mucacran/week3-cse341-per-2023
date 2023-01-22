const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contact');

//esto es para usar el post
const bodyParser = require('body-parser');
const cors = require('cors');
// Configuring body parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
//variable de matriz de contactos
let contactos = [];
router.use(cors());

router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
router.post('/respaldo/', (req, res) => {
    const contacto = req.body;
    // Output the contacto to the console for debugging
    console.log(contacto);
    contactos.push(contacto);
    res.send('contacto is added to the database');
});

router.post('/',contactsController.enviardatos);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;