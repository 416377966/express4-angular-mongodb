'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.mainServices', [])
    .value('version', '0.1')
    .factory("promiseService", function ($q, $http) {
        var runRequest = function (url, method, data, params) {
            var deferred = $q.defer();
            $http({
                url: url,
                method: method,
                data: data,
                params: params
            })
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (reason) {
                    deferred.reject(reason);
                })
            return deferred.promise;
        };
        return {
            request: function (url, method, data, params) {
                return runRequest(url, method, data, params)
            }
        };
    })
