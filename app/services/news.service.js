/**
 * Created by wdverme on 08/02/2016.
 */
angular.module('local-social-pulse').service('newsService', function($q, $filter) {
  var localNewsService = {};

  localNewsService.getLocalNews = function(filters) {
    var deferred = $q.defer();
    var listOfNews = [{
      id: "1",
      date: new Date('2016/02/01 12:01:00'),
      author: 'Jorge Ramirez',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      imageUrl: 'https://i.ytimg.com/vi/A_aPgPq6hMM/maxresdefault.jpg'
    }, {
      id: "2",
      date: new Date('2016/02/01 12:02:00'),
      author: 'Juan Sanchez',
      text: 'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      imageUrl: 'http://cosmouk.cdnds.net/15/16/1429012887-monalisaducklips.png'
    }, {
      id: "3",
      date: new Date('2016/01/29 12:02:00'),
      author: 'Gerardo Pilar',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it',
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
      for (var j=0; j<listOfNews.length; j++){
        var newItem = angular.copy(listOfNews[j]);
        newItem.id = i + '-' + j;
        newArray.push(newItem);

      }
    }
    deferred.resolve(newArray);

    return deferred.promise;
  }

  return localNewsService;
});