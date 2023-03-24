const matricesRouter = require('./matrices');
const accountsRouter =  require('./accounts');
const questionsRouter = require('./questions')

function route(app){
    app.use('/accounts', accountsRouter);
    app.use('/matrices', matricesRouter);
    app.use('/questions', questionsRouter);
}

module.exports = route;