const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answers = new Schema(
    {
        name: String,
        content: String,
        isTrue: Boolean,
        questions: Schema.Types.ObjectId
    }
)

module.exports = mongoose.model('answers', answers);