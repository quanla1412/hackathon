const mongoose = require('mongoose');
const matrixDetails = require('./matrixDetails');
const Schema = mongoose.Schema

const matrices = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: String,
        total: Number,
        time: Number,
        isRoot: {type: Boolean, default: false},
        account: Schema.Types.ObjectId
    }
)

module.exports = mongoose.model('matrices', matrices);