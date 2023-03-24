const mongoose = require('mongoose')

const Schema = mongoose.Schema

const difficultLevels = new Schema(
    {
        name: String,
        level: Number
    }
)

module.exports = mongoose.model('difficultLevels', difficultLevels);