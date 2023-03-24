const express = require('express');
const MatricesController = require('../app/controllers/MatricesController');
const router = express.Router()

router.get('/', MatricesController.getAll);
router.get('/names', MatricesController.getNames);

module.exports = router