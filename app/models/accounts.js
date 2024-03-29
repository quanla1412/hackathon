const mongoose = require('mongoose');
const Schema = mongoose.Schema

const accounts = new Schema(
    {
        _id: Schema.Types.ObjectId,
        fullname: String,
        username: { type: String, unique: true},
        password: String,
    }
)

module.exports = mongoose.model('accounts', accounts);