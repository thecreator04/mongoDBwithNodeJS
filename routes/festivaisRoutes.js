const express = require('express');
const router = express.Router();

// Colocar controller que ainda não foi criado
const festivalController = require('../controllers/festivalController');
// teste simples
router.get('/', festivalController.index);


router.get('/cadastro', festivalController.cadastro);


router.post('/create', festivalController.create);

router.get('/delete/:nome', festivalController.delete)


module.exports = router;