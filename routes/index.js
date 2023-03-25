const matricesRouter = require('./matrices');
const accountsRouter =  require('./accounts');
const questionsRouter = require('./questions');
const answersRouter = require('./answers');

function route(app){
    app.use('/accounts', accountsRouter);
    app.use('/matrices', matricesRouter);
    app.use('/questions', questionsRouter);
    app.use('/answers', answersRouter);
}

module.exports = route;