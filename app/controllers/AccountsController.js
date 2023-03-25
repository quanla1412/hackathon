const { ObjectId } = require("mongodb");
const accounts = require("../models/accounts")

class AccountsController {
    //[POST] /login
    login (req, res, next) {
        const username = req.body.username;
        const password = req.body.password;
    
        accounts.findOne({ username: username, password: password})
            .then( account => res.status(200).json({"success": true, "fullname": account.fullname}))
            .catch(next);
    } 

    //[POST] /register
    register (req, res, next) {
        const account = new accounts(req.body);
        account._id = new ObjectId();
        console.log(req.body);
        account.save()
            .then( () => res.status(200).json({"success": true, "fullname": account.fullname}))
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