/**
 * Created by Superwen on 15/9/6.
 */
var User = require('./../controllers/user');
var routes = require('./../routes/index');
var admin = require('./../routes/admin');

module.exports = function (app, express) {
    var router = express.Router();
    //路由 ==============================================================================================
    app.use('/', routes);
    app.use('/admin', admin);


    //服务(所有服务前加上api) =============================================================================
    app.use('/api', router);
    //user restful服务
    User(router);


    //页面刷新重定向 =====================================================================================
    app.all('/*', function (req, res, next) {
        res.render('index', {root: __dirname});
    });
}
