/**
 * Created by Superwen on 15/9/6.
 */
var User = require('./../models/users');

module.exports = function (router) {
    router.route('/user')
        .post(function (req, res) {
            var user = new User();
            user.username = req.body.username;
            user.password = req.body.password;
            user.contact.email = req.body.email;
            // 保存用户检测错误
            user.save(function (err) {
                if (err)
                    res.send(err);

                res.json({type: 1, message: 'User created!'});
            });
        })
        .get(function (req, res) {
            User.find(function (err, users) {
                if (err)
                    res.send(err);

                res.json({type: 1, message: users});
            });
        });
    router.route('/user/:user_id')
        .get(function (req, res) {
            User.find({username: req.params.user_id},function (err, users) {
                if (err)
                    res.send(err);

                res.json({type: 1, message: users});
            });
        })
        .delete(function(req, res) {
            User.remove({
                _id: req.params.user_id
            }, function(err, bear) {
                if (err)
                    res.send(err);

                res.json({type: 1, message: 'Successfully deleted' });
            });
        })
        .put(function(req, res) {

            User.findById(req.params.user_id, function(err, user) {

                if (err)
                    res.send(err);

                user.username = req.body.username;
                user.contact.email = req.body.email;
                user.update_date = Date.now();
                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({type:1, message: 'User updated!' });
                });

            });
        });
}
