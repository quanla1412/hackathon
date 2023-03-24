const mongoose = require('mongoose')

const questions = require('./questions')

const Schema = mongoose.Schema

const questionTypes = new Schema(
    {
        name: String,
        grade: Schema.Types.ObjectId,
        difficultLevel: Schema.Types.ObjectId,
    }
)

module.exports = mongoose.model('questionTypes', questionTypes);