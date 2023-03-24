const mongoose = require('mongoose');
const Schema = mongoose.Schema

const accounts = new Schema(
    {
        fullname: String,
        username: String,
        password: String,
        matrices: {type: [Schema.Types.ObjectId], null: true}
    }
)

module.exports = mongoose.model('accounts', accounts);