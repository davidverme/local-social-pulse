/**
 * Created by wdverme on 08/02/2016.
 */
angular.module('local-social-pulse').service('newsService', function($q, $filter) {
  var localNewsService = {};

  localNewsService.getLocalNews = function(filters) {
    var deferred = $q.defer();
    var listOfNews = [{
      date: new Date('2016/02/01 12:01:00'),
      author: 'Jorge Ramirez',
      text: 'Hola que tal'
    }, {
      date: new Date('2016/02/01 12:02:00'),
      author: 'Juan Sanchez',
      text: 'Todo bien'
    }, {
      date: new Date('2016/01/29 12:02:00'),
      author: 'Gerardo Pilar',
      text: 'Siempre Tarde'
    }];

    if (filters) {
      if (filters.text) {
        listOfNews = $filter('filter')(listOfNews, function(item) {
          return item.text.toLowerCase().indexOf(filters.text.toLowerCase()) > -1;
        });
      }
    }

    var newArray = [];
    for (var i=0; i<100; i++) {
      newArray = newArray.concat(listOfNews);
    }
    deferred.resolve(newArray);

    return deferred.promise;
  }

  return localNewsService;
});