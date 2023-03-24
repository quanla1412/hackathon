const newsRouter =  require('./news')
const accountsRouter =  require('./accounts')

function route(app){
    app.use('/news', newsRouter);
    app.use('/accounts', accountsRouter);
}

module.exports = route;