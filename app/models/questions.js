const mongoose = require('mongoose')

const answers = require('./answers')

const Schema = mongoose.Schema

const questions = new Schema(
    {
        content: String,
        image: { type: String, default: ""},
        answers: [Schema.Types.ObjectId]
    }
)

module.exports = mongoose.model('questions', questions);