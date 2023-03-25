const answers = require("../models/answers");
const questions = require("../models/questions");
const questionTypes = require("../models/questionTypes");
const ObjectId = require('mongodb').ObjectId;


class AnswersController {

    //[GET] /:question_id
    getByQuestionId(req, res, next){
        answers.find({ questions: req.params.question_id})
            .then( answer => res.json(answer))
            .catch(next);
    }
    
} 

module.exports = new AnswersController()