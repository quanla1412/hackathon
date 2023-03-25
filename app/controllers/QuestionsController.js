const answers = require("../models/answers");
const matrices = require("../models/matrices");
const matrixDetails = require("../models/matrixDetails");
const questions = require("../models/questions");
const questionTypes = require("../models/questionTypes");
const ObjectId = require('mongodb').ObjectId;


class QuestionsController {
    //[POST] /store
    store(req, res, next) {
        const data = req.body;

        data.questions.forEach( question => {
            const new_question = new questions({ content: question.content, questionTypes: data._id});
            new_question._id = new ObjectId();
            new_question.save()
                .then(() => {
                    question.answers.forEach(answer => {
                        const new_answer = new answers({name: answer.name, content: answer.content, isTrue: answer.isTrue, questions: new_question._id});

                        new_answer.save()
                            .then()
                            .catch(next);
                    })
                })
                .catch(next);
        })

        res.json({success: true});
    }

    //[GET] /:question_type/:quantity
    getQuestionsByQuestionType(req, res, next) {
        if(req.params.quantity === '0')
            res.json(null)

        questions.find({questionTypes: req.params.question_type})
            .then(result => {
                const amount = Number(req.params.quantity);
                const resultQuestions = [];
                for(var i = 0; i < amount; i++){
                    const randomNumber = Math.floor(Math.random() * result.length);
                    resultQuestions.push(result[randomNumber]);
                    result.slice(randomNumber,1);
                }
                res.json(resultQuestions);
            })
            .catch(next);    
    }

    //[GET] /
    getAll(req, res, next){
        questions.find({})
            .then( question => res.json(question))
            .catch(next);
    }
    
} 

module.exports = new QuestionsController()