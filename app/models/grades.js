const mongoose = require('mongoose')

const Schema = mongoose.Schema

const grades = new Schema(
    {
        name: String,
        level: Number
    }
)

module.exports = mongoose.model('grades', grades);