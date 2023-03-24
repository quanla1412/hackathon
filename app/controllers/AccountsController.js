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

    //[POST] /register
    register (req, res, next) {
        const account = new accounts(req.body);
        console.log(req.body);
        account.save()
            .then( () => res.json(req.body.fullname))
            .catch(next);
    } 

    //[GET] /
    getAll(req, res, next) {
        accounts.find({ })
            .then( accounts => res.send(accounts))
            .catch(next);
    }
    
} 

module.exports = new AccountsController()