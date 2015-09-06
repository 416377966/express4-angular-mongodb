'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
    'ngRoute',
    'ui.router',
    'ngMessages',
    'myApp.mainControllers',
    'myApp.mainFilters',
    'myApp.mainServices',
    'myApp.mainDirectives'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/index.html',
            }).
            when('/user', {
                templateUrl: 'templates/user.html',
                controller: 'UserCtrl'
            }).
            when('/add', {
                templateUrl: 'templates/add.html',
                controller: 'AddCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });
