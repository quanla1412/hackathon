const matrices = require("../models/matrices")

class MatricesController {
    //[GET] /:id
    getMatrix(req, res, next) {
        matrices.findOne({_id: req.params.id})
            .then( matrix => res.json(matrix))
            .catch(next);
    }

    //[GET] /names
    getNames(req, res, next) {
        matrices.find({})
            .then( matrices => {
                var result = [];
                matrices.forEach( matrice => result.push({_id: matrice._id, name: matrice.name}));

                res.status(200).json({names: result});
            })
            .catch(next);
    }
    
    //[GET] /
    getAll(req, res, next) {
        matrices.find({ })
            .then( matrices => res.json(matrices))
            .catch(next);
    }
} 

module.exports = new MatricesController()