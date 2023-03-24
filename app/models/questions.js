const mongoose = require('mongoose')

const answers = require('./answers')

const Schema = mongoose.Schema

const questions = new Schema(
    {
        _id: Schema.Types.ObjectId,
        content: String,
        image: { type: String, default: ""},
        questionTypes: Schema.Types.ObjectId
    }
)

module.exports = mongoose.model('questions', questions);