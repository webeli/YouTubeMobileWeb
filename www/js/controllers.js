angular.module('app.controllers', [])

.controller('searchCtrl', function($scope, $http, $q, $ionicLoading) {

  $scope.videos = [];

  $scope.youtubeParams = {
    key: 'AIzaSyCNoxTc2M1WvYikPfm7NhYapmWTYq9ye5A',
    type: 'video',
    maxResults: '50',
    part: 'id,snippet',
    q: '',
    order: 'relevance'
  }

  $scope.getVideos = function(query) {
    $ionicLoading.show({
      template: '<p>Loading ' + query + '...</p><ion-spinner></ion-spinner>'
    });
    $scope.youtubeParams.q = query;
    $scope.videos = [];
    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
      angular.forEach(response.items, function(child){
        $scope.videos.push(child);
      });
      $q.all($scope.videos).then(function () {
        console.log($scope.videos);
        $ionicLoading.hide();
      });
    });
  };

})

.controller('myMusicCtrl', function($scope) {

})

.controller('exploreCtrl', function($scope) {

})
