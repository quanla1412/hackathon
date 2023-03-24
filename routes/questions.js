const express = require('express');
const QuestionsController = require('../app/controllers/QuestionsController');
const questions = require('./');
const router = express.Router()

router.post('/store', QuestionsController.store);

module.exports = router