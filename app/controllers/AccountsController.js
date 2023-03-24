const accounts = require("../models/accounts")

class AccountsController {
    //[POST] /login
    login (req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
    
        accounts.findOne({ username: username, password: password})
            .then( accounts => res.send("access success"))
            .catch(next);
    } 

    //[GET] /
    getAll(req, res, next) {
        accounts.find({ })
            .then( accounts => res.send("access success"))
            .catch(next);
    }
    
} 

module.exports = new AccountsController()