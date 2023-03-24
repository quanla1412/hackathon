const matricesRouter = require('./matrices');
const accountsRouter =  require('./accounts')

function route(app){
    app.use('/accounts', accountsRouter);
    app.use('/matrices', matricesRouter);
}

module.exports = route;