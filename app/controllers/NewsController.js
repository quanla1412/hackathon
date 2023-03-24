const News = require('../models/News')

class NewsController {

    //[GET] /news
    getAll(req, res, next) {
        News.find({})
            .then( news => res.json(news))
            .catch(next);
    }

    //[POST] /news/store
    store(req, res, next) {
        const news = new News(req.body);
        news
            .save()
            .then(() => res.send('Add successfully'))
            .catch(next);

    }

    //[GET] /news/:id
    getById(req, res, next) {
        News.findById(req.params.id)
            .then((course) => res.json(course))
    }

    //[PUT] /news/:id
    update(req, res, next) {
        News.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/news/' + req.params.id))
            .catch(next);
    }

    //[DELETE] /news/:id
    destroy(req, res, next) {
        News.deleteOne({_id: req.params.id})
            .then(() => res.redirect('/news/'))
            .catch(next);
    }
} 

module.exports = new NewsController()