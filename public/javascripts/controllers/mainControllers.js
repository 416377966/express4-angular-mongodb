'use strict';

/* Controllers */

angular.module('myApp.mainControllers', []).
    controller('AppCtrl', function ($scope, $http) {

        $scope.name = "Superwen";

    }).
    controller('AddCtrl', function ($scope, promiseService) {
        // 注册
        $scope.user = {};
        $scope.doRegist = function () {
            var data = JSON.stringify($scope.user);
            var url = "./api/user";
            promiseService.request(url, 'post', data)
                .then(function (data) {
                    if (data.type == 1)
                        $scope.regist = data;
                })
        }

    }).
    controller('UserCtrl', function ($scope, promiseService) {
        var url = "./api/user";
        promiseService.request(url, 'get')
            .then(function (data) {
                if (data.type == 1)
                    $scope.users = data.message;
            });
        $scope.delete = function(id){
            var url = "./api/user/" + id;
            promiseService.request(url, 'delete')
                .then(function (data) {
                    if (data.type == 1)
                        $scope.users = _.filter($scope.users, function(user){ return user._id != id});
                })
        };
        $scope.search = function(){
            var url = "./api/user/" + $scope.searchuser;
            promiseService.request(url, 'get')
                .then(function (data) {
                    if (data.type == 1)
                        $scope.users = data.message;
                })
        };
        $scope.edit = function(id){
            $scope.editmode = id;
        }
        $scope.cancel = function(){
            $scope.editmode = 0;
        }
        $scope.submit = function(users){
            var user = users.user;
            var senddata = JSON.stringify(user.userupdate);
            var url = "./api/user/" + user._id;
            promiseService.request(url, 'put', senddata)
                .then(function (data) {
                    if (data.type == 1){
                        _.extend(_.findWhere($scope.users, {_id: user._id}), {username:user.userupdate.username, email:user.userupdate.email});
                        $scope.editmode = 0;
                    }
                })
        }
    });
