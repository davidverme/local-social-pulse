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
      text: 'Hola que tal',
      imageUrl: 'https://i.ytimg.com/vi/A_aPgPq6hMM/maxresdefault.jpg'
    }, {
      date: new Date('2016/02/01 12:02:00'),
      author: 'Juan Sanchez',
      text: 'Todo bien',
      imageUrl: 'http://cosmouk.cdnds.net/15/16/1429012887-monalisaducklips.png'
    }, {
      date: new Date('2016/01/29 12:02:00'),
      author: 'Gerardo Pilar',
      text: 'Siempre Tarde',
      imageUrl: 'http://www.kineo.com/m/0/woody-selfie.jpg'
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