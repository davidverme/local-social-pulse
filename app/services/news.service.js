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
      imageUrl: 'https://i.ytimg.com/vi/A_aPgPq6hMM/maxresdefault.jpg',
      user: 'Teleocho Noticias',
      userImage: 'https://scontent.xx.fbcdn.net/hprofile-xft1/v/t1.0-1/p50x50/11813322_10153331310987107_7495315872469716292_n.png?oh=dea6f4234e1ed367cf42a5b1c24eb094&oe=5771124E',
      likes: 34,
      comments: 13,
      shares: 400
    }, {
      id: "2",
      date: new Date('2016/02/01 12:02:00'),
      author: 'Juan Sanchez',
      text: 'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      imageUrl: 'http://cosmouk.cdnds.net/15/16/1429012887-monalisaducklips.png',
      user: 'ElDoce.tv',
      userImage: 'https://scontent.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p50x50/11665629_874897262546606_2262497008779196523_n.jpg?oh=ef4c9fbd22bc9f6400235e30ddf1e542&oe=572B90E4',
      likes: 1002,
      comments: 1263,
      shares: 14200
    }, {
      id: "3",
      date: new Date('2016/01/29 12:02:00'),
      author: 'Gerardo Pilar',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it',
      imageUrl: 'http://www.kineo.com/m/0/woody-selfie.jpg',
      user: 'Cadena 3 Argentina',
      userImage: 'https://scontent.xx.fbcdn.net/hprofile-xpa1/v/t1.0-1/p50x50/10325152_1209983825696246_8059581281032480012_n.png?oh=0eea082c18e9bf0c191164f97b82ef1d&oe=57398D02',
      likes: 98,
      comments: 46,
      shares: 19003219
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