const mongoose = require('mongoose');
const matrixDetails = require('./matrixDetails');
const Schema = mongoose.Schema

const matrices = new Schema(
    {
        name: String,
        isRoot: Boolean,
        total: Number,
        time: Number,
        account: Schema.Types.ObjectId
    }
)

module.exports = mongoose.model('matrices', matrices);