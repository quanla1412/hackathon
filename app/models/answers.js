const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answers = new Schema(
    {
        name: String,
        content: String,
        isTrue: Boolean,
    }
)

module.exports = mongoose.model('answers', answers);