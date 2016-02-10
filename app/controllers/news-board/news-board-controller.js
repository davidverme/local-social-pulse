/**
 * Created by wdverme on 08/02/2016.
 */
angular.module('local-social-pulse').controller('localNewsController',
  function($rootScope, $scope) {
    $rootScope.$on('news-refresh', function(event, data) {
      $scope.news = data;
    });
});
