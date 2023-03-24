const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController');

router.get('/:id', newsController.getById);
router.put('/:id', newsController.update);
router.delete('/:id', newsController.destroy);
router.get('/', newsController.getAll);
router.post('/store', newsController.store);

module.exports = router