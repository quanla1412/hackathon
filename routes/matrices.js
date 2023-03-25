const express = require('express');
const MatricesController = require('../app/controllers/MatricesController');
const router = express.Router()

router.get('/', MatricesController.getAll);
router.get('/names', MatricesController.getNames);
router.get('/:id', MatricesController.getMatrix);
router.get('/details/:id', MatricesController.getDetailById);

module.exports = router