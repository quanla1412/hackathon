const mongoose = require('mongoose');

connect().catch(err => console.log(err));

async function connect() {
    await mongoose.connect('mongodb+srv://tinydead:Tinydead1412@youngboy.y74msgc.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connect successfully")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {connect}