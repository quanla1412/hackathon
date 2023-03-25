const mongoose = require('mongoose');
const questionTypes = require('./questionTypes');
const Schema = mongoose.Schema

const matrixDetails = new Schema(
    {
        questionType: Schema.Types.ObjectId,
        quantity: Number,
        matrices: Schema.Types.ObjectId,
    }
)

module.exports = mongoose.model('matrixDetails', matrixDetails);