const express = require('express');
const QuestionsController = require('../app/controllers/QuestionsController');
const questions = require('./');
const router = express.Router()

router.post('/store', QuestionsController.store);
router.get('/:question_type/:quantity', QuestionsController.getQuestionsByQuestionType);
router.get('/', QuestionsController.getAll);

module.exports = router