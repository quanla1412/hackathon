const matrices = require("../models/matrices");
const matrixDetails = require("../models/matrixDetails");

class MatricesController {
    //[POST] /save

    //[GET] /:question/:id
    getDetailById(req, res, next) {
        matrices.findById({_id: req.params.matrix_id})
            .then( matrix => {
                matrixDetails.find({ matrices: matrix._id})
                    .then(matrixDetailsTemp => {
                        res.json(matrixDetailsTemp);
                    })
                    .catch(error);
            })
            .catch(next);
    }

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

                res.status(200).json({matrices: result});
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