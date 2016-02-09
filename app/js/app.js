'use strict';

// Declare app level module which depends on views, and components
angular.module('local-social-pulse', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/news-board', {
        controller: 'localNewsController',
        templateUrl: '../controllers/news-board/news-board.tmpl.html'
      })
      .otherwise({redirectTo: '/news-board'});
}]);