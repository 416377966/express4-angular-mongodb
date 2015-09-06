'use strict';

/* Filters */

angular.module('myApp.mainFilters', []).
  filter('interpolate', function (version) {
    return function (text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  });
