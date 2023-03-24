const mongoose = require('mongoose');

connect().catch(err => console.log(err));

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/hackathondb');
    console.log("Connect database successfully")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {connect}