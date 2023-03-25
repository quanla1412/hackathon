const express = require('express');
const AnswersController = require('../app/controllers/AnswersController');
const router = express.Router()

router.get('/:question_id', AnswersController.getByQuestionId);

module.exports = router