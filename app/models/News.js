const mongoose = require('mongoose')
const Schema = mongoose.Schema

const News = new Schema(
    {
        title: String,
        content: String,
        image: String,
        author: String,
        authorUsername: String,
        releaseDate: Date,
        minutesToRead: Number,
        vote: { type: Number, default: 0},
        viewed: { type: Number, default: 0},
        comment: { type: Number, default: 0},
        bookmarked: { type: Number, default: 0},
    }
)

module.exports = mongoose.model('News', News);