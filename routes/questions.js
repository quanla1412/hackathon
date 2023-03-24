const express = require('express');
const questions = require('./');
const router = express.Router()

router.get('/', MatricesController.getAll);
router.get('/names', MatricesController.getNames);
router.get('/:id', MatricesController.getMatrix);

module.exports = router