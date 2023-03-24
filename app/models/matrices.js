const mongoose = require('mongoose');
const matrixDetails = require('./matrixDetails');
const Schema = mongoose.Schema

const matrices = new Schema(
    {
        name: String,
        matrixDetails: [Schema.Types.ObjectId],
        isRoot: Boolean,
        total: Number,
        time: Number
    }
)

module.exports = mongoose.model('matrices', matrices);