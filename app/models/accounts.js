const mongoose = require('mongoose');
const Schema = mongoose.Schema

const accounts = new Schema(
    {
        fullname: String,
        username: { type: String, unique: true},
        password: String,
        matrices: {type: [Schema.Types.ObjectId], default: []}
    }
)

module.exports = mongoose.model('accounts', accounts);