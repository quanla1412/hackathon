const answers = require("../models/answers");
const questions = require("../models/questions");
const questionTypes = require("../models/questionTypes");
const ObjectId = require('mongodb').ObjectId;


class QuestionsController {
    //[POST] /store
    store(req, res, next) {
        const data = req.body;

        var listQuestions = [];
        questionTypes.findById({ _id: data._id})
            .then( questionType => {
                listQuestions = questionType.questions;
                data.questions.forEach(question => {
                    const listAnswers = [];
                    question.answers.forEach( answer => {
                        const new_answer = new answers(answer);
                        new_answer._id = new ObjectId();
                        new_answer
                            .save()
                            .then(() => {
                                listAnswers.push(new_answer._id);
                            })
                            .catch(next);
                    })
                    const new_question = new questions({content: question.content, image: question.image, answers: listAnswers});
                    new_question._id = new ObjectId();
                    new_question.save()
                        .then(() => {
                                listQuestions.push(new_question._id);
                        })
                                console.log(listQuestions);
                })
            })
            .catch(next);

            questionTypes.findByIdAndUpdate(data._id, { questions: listQuestions})
            .then(
                res.json({success: true})
            )
            .catch(next);
    }
    
} 

module.exports = new QuestionsController()