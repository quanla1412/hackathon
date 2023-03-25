const { ObjectId } = require("mongodb");
const matrices = require("../models/matrices");
const matrixDetails = require("../models/matrixDetails");

class MatricesController {
    //[POST] /insert
    insert(req, res, next) {
        const data = req.body;
        matrix = new matrices({name: data.name, total: data.total, time: data.time});
        matrix._id = new ObjectId();

        matrix.save()
            .then(
                data.metrixDetails.forEach(matrixDetail => {
                    matrixDetail = new matrixDetails(matrixDetail);
                    matrixDetail.matrices = matrix._id;
                    matrixDetail.save();
                })
            )
            .catch(next);
        
        res.json({success: true})
    }

    //[GET] /details/:id
    getDetailById(req, res, next) {
        matrices.findById({_id: req.params.id})
            .then( matrix => {
                matrixDetails.find({ matrices: matrix._id})
                    .then(matrixDetailsTemp => {
                        res.json(matrixDetailsTemp);
                    })
                    .catch(next);
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