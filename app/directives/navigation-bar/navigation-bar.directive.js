/**
 * Created by wdverme on 08/02/2016.
 */
angular.module('local-social-pulse').directive('navigationBar', function() {

  return {
    restrict: 'E',
    templateUrl: 'directives/navigation-bar/navigation-bar.tmpl.html',
    controller: function($rootScope, $scope, $timeout, newsService) {
      function setNews(data) {
        $rootScope.$emit('news-refresh', data);
      }

      function search () {
        newsService.getLocalNews({text: $scope.searchText}).then(function(data) {
          setNews(data);
        });
      }

      $scope.search = search;

      $scope.cleanSearch = function () {
        $scope.searchText = "";
        search();
      };

      $scope.blurSearch = function () {
        angular.element("#searchInput").blur();
      };

      angular.element(document).ready(function() {
        $timeout(function(){
          newsService.getLocalNews().then(function(data) {
            setNews(data);
          });
        }, 500);
      })
    }
  };
});