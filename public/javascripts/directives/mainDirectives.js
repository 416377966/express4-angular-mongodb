'use strict';

/* Directives */

angular.module('myApp.mainDirectives', [])
  .directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
