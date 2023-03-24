const matrices = require("../models/matrices")

class MatricesController {
    //[GET] /
    getAll(req, res, next) {
        matrices.find({ })
            .then( matrices => res.json(matrices))
            .catch(next);
    }

    //[GET] /names
    getNames(req, res, next) {
        matrices.find({})
            .then( matrices => res.json(matrices.name))
            .catch(next);
    }
    
} 

module.exports = new MatricesController()