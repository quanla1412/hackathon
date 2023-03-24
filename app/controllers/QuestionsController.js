const answers = require("../models/answers");
const questionTypes = require("../models/questionTypes");


class QuestionsController {
    //[POST] /store
    store(req, res, next) {
        const data = req.body;

        questionTypes.findById({ _id: data._id})
            .then( questionType => {
                data.questions.forEach(question => {
                    var answer_id = [];
                    question.answers.forEach( answer => {
                        const new_answer = new answers(answer)
                        answer_id.push(new_answer.save().id);
                    });

                    console.log(answer_id);
                })
            })
            .catch(next);
        res.send(data);
    }
    
} 

module.exports = new QuestionsController()