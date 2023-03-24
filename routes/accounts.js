const express = require('express');
const AccountsController = require('../app/controllers/AccountsController');
const router = express.Router()


router.post('/login', AccountsController.login);
router.post('/register', AccountsController.register);
router.get('/', AccountsController.getAll);

module.exports = router